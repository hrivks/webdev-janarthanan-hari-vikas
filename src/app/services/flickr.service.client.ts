import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppConstants } from '../app.constant';
import { ErrorHandlerService } from './error-handler.service.client';

@Injectable()
export class FlickrService {
    // properties
    endpoint = {
        'getApiKey': AppConstants.ENDPOINT.baseUrl + '/widget/Flickr/ApiKey'
    };

    private flickrApiKey: string;
    private flickrSearchEndpoint
    = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={key}&text={text}&format=json&nojsoncallback=1&accuracy=3';

    constructor(private http: HttpClient,
        private errorHanderService: ErrorHandlerService) {
    }

    /**
     * Get Flickr API key
     * @returns Observable that gets resolved to Flickr API key string
     */
    getFlickrApiKey(): Observable<string> {
        const obs = new Observable<any>((observer) => {
            if (this.flickrApiKey) {
                observer.next(this.flickrApiKey);
                observer.complete();
            } else {
                this.http.get(this.endpoint.getApiKey)
                    .subscribe(
                    (data: any) => {
                        if (data.key) {
                            this.flickrApiKey = data.key;
                            observer.next(this.flickrApiKey);
                            observer.complete();
                        } else {
                            const err = Error('Please specify api key in flickr.service.client.ts file');
                            this.errorHanderService.handleError('Flickr Api key is required', err);
                            observer.error(err);
                        }
                    },
                    (err) => {
                        this.errorHanderService.handleError('Oops! Error getting Flickr API key from server', err);
                        observer.error(err);
                    }
                    );
            }
        });

        return obs;
    }

    /**
     * Search flickr for images related to specifed searchText
     * @param searchText image search keyword
     * @param page page number
     */
    search(searchText: string, page?: number): Observable<any> {

        const obs = new Observable<any>((observer) => {

            this.getFlickrApiKey()
                .subscribe(
                (apiKey) => {
                    let url = this.flickrSearchEndpoint
                        .replace('{key}', this.flickrApiKey)
                        .replace('{text}', searchText);

                    if (page) {
                        url += '&page=' + page;
                    }

                    this.http.get(url)
                        .subscribe(
                        (data) => {
                            observer.next(data);
                            observer.complete();
                        },
                        (err) => {
                            observer.error(err);
                        });
                });

        });

        return obs;
    }

}
