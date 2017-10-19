import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../../../../services/flickr.service.client';
import { InteractionsService } from '../../../../../services/interactions.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  // properties
  searchText: string;
  searchResults: string[];
  searchPageNo: number;
  flickrUrlFormat = 'https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_s.jpg';

  constructor(private flickrService: FlickrService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {
  }

  search() {
    if (this.searchText) {
      this.flickrService.search(this.searchText)
        .subscribe(
        (results) => {
          this.searchResults = (results.photos.photo).map(r => {
            return this.flickrUrlFormat.toString()
            .replace('{farm-id}', r.farm)
            .replace('{server-id}', r.server)
            .replace('{id}', r.id)
            .replace('{secret}', r.secret);
          });
        },
        (err) => {
          console.error('Error performing Flickr Search', err);
          const errMessage = JSON.parse(err.error);
          this.interactionsService.showAlert('Uh ho! Flickr is acting up again!. ' + errMessage, 'danger', true);
        }
        );
    }
  }

}
