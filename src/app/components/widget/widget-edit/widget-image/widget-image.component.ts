import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../../model/model';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-image-edit',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageEditComponent implements OnInit {

  // properties
  widgetId: string;
  widget: Widget;
  @ViewChild('widgetImageEditForm') widgetImageEditForm: NgForm;

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
    if (this.widgetImageEditForm.invalid) {
      // touch controls to trigger validation messages
      this.widgetImageEditForm.controls.name.markAsTouched({ onlySelf: true});
      this.widgetImageEditForm.controls.url.markAsTouched({ onlySelf: true});
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
