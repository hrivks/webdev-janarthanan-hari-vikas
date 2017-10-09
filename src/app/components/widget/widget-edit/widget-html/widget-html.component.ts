import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../../model/model';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-html-edit',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlEditComponent implements OnInit {

  // properties
  widgetId: string;
  widget: Widget;
  @ViewChild('widgetHtmlEditForm') widgetHtmlEditForm: NgForm;

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
    if (this.widgetHtmlEditForm.invalid) {
      // touch controls to trigger validation messages
      this.widgetHtmlEditForm.controls.name.markAsTouched({ onlySelf: true});
      this.widgetHtmlEditForm.controls.text.markAsTouched({ onlySelf: true});
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
