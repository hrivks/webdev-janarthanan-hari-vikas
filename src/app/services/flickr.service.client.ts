import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppConstants } from '../app.constant';

@Injectable()
export class FlickrService {
    // properties
    private flickrApiKey: string;
    private flickrSearchEndpoint
    = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={key}&text={text}&format=json&nojsoncallback=1&accuracy=3';

    constructor(private http: HttpClient) {
        this.flickrApiKey = '';  // << ADD YOUR FLICKR API KEY HERE >>

        if (!this.flickrApiKey) {
            alert('Flickr Api key is required. Please specify api key in flickr.service.client.ts file');
            throw Error('Flickr Api key is required. Please specify api key in flickr.service.client.ts file');
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
