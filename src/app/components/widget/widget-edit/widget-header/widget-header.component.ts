import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../../model/model';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header-edit',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  // properties
  widgetId: string;
  widget: Widget;
  @ViewChild('widgetHeaderEditForm') widgetHeaderEditForm: NgForm;

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
    if (this.widgetHeaderEditForm.invalid) {
      // touch controls to trigger validation messages
      this.widgetHeaderEditForm.controls.name.markAsTouched({ onlySelf: true});
      this.widgetHeaderEditForm.controls.text.markAsTouched({ onlySelf: true});
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
