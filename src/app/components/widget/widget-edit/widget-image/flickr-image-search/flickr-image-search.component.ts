import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetType } from '../../../../../model/model';
import { FlickrService } from '../../../../../services/flickr.service.client';
import { WidgetService } from '../../../../../services/widget.service.client';
import { InteractionsService } from '../../../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../../../services/error-handler.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  // properties
  private searchText: string;
  private searchResults: string[];
  private searchPageNo: number;
  private widgetId: string;
  private widget: Widget;
  private flickrUrlFormat = 'https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_s.jpg';


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private flickrService: FlickrService,
    private widgetService: WidgetService,
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.widgetId = params['wgid'];
      if (!this.widgetId) {
        this.interactionsService.showAlert('Uhho! Widget Id is needed to access Flickr Image search. Try again', 'danger', true);
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
      } else {
        this.interactionsService.showLoader(true);
        // get corresponding widget
        this.widgetService.findWidgetById(this.widgetId)
          .finally(() => { this.interactionsService.showLoader(false); })
          .subscribe(
          (widget) => {
            if (WidgetType[widget.widgetType] !== WidgetType.Image) {
              this.interactionsService.showAlert('Hmm! Widget with id ' + this.widgetId + ' is not an Image widget', 'danger', true);
              this.router.navigate(['../'], { relativeTo: this.activatedRoute });
            }
            this.widget = widget;
          },
          (err) => {
            this.errorHanderService.handleError('Uhho! Error getting Widget with Id "' + this.widgetId + '"', err);
            this.router.navigate(['../'], { relativeTo: this.activatedRoute });
          }
          );
      }

    });
  }

  search() {
    if (this.searchText) {
      this.interactionsService.showLoader(true);
      this.flickrService.search(this.searchText)
        .finally(() => {
          console.log('in finally');
          this.interactionsService.showLoader(false);
        })
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
          this.errorHanderService.handleError('Uhho! Flickr is acting up again!', err, true);
        }
        );
    }
  }

  /**
   * Select image and save it to widget
   * @param src URL of the image
   */
  selectImage(src: string) {
    this.interactionsService.showLoader(true);
    this.widget.url = src.replace('_s.jpg', '_b.jpg');
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .finally(() => { this.interactionsService.showLoader(false); })
      .subscribe(
      (updatedWidget) => {
        this.interactionsService.showAlert('Widget updated successfully', 'success', true);
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
      },
      (err) => {
        this.errorHanderService.handleError('ummfff! Widget update failed', err);
      }
      );
  }

}
