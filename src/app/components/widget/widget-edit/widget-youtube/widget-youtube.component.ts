import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../../model/model';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube-edit',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeEditComponent implements OnInit {

  // properties
  widgetId: string;
  widget: Widget;
  @ViewChild('widgetYoutubeEditForm') widgetYoutubeEditForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.widgetId = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    });
  }

  /**
   * Save changes to widget
   */
  saveChanges() {
    if (this.widgetYoutubeEditForm.invalid) {
      // touch controls to trigger validation messages
      this.widgetYoutubeEditForm.controls.name.markAsTouched({ onlySelf: true});
      this.widgetYoutubeEditForm.controls.url.markAsTouched({ onlySelf: true});
    } else {
      this.widgetService.updateWidget(this.widgetId, this.widget);
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }
  }

  /**
   * Delete current widget
   */
  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
