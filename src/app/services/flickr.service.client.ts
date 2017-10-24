import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppConstants } from '../app.constant';
import { ErrorHandlerService } from './error-handler.service.client';

@Injectable()
export class FlickrService {
    // properties
    private flickrApiKey: string;
    private flickrSearchEndpoint
    = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={key}&text={text}&format=json&nojsoncallback=1&accuracy=3';

    constructor(private http: HttpClient,
        private errorHanderService: ErrorHandlerService) {
        this.flickrApiKey = 'bd852c88d114a538443cfffa86380f74';  // << ADD YOUR FLICKR API KEY HERE >>

        if (!this.flickrApiKey) {
            this.errorHanderService.handleError('Flickr Api key is required',
                Error('Please specify api key in flickr.service.client.ts file'));
        }
    }

    /**
     * Search flickr for images related to specifed searchText
     * @param searchText image search keyword
     * @param page page number
     */
    search(searchText: string, page?: number): Observable<any> {
        let url = this.flickrSearchEndpoint
            .replace('{key}', this.flickrApiKey)
            .replace('{text}', searchText);

        if (page) {
            url += '&page=' + page;
        }
        return this.http.get(url);
    }
}
