import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetType } from '../../../model/model';
import { WidgetService } from '../../../services/widget.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  // properties
  WidgetType = WidgetType;
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const widgetId = params['wgid'];
      this.widgetService.findWidgetById(widgetId)
        .subscribe(
        (widget) => {
          this.widget = widget;
        },
        (err) => {
          console.error('Error getting widget of Id ' + widgetId, err);
          const errMessage = JSON.parse(err.error);
          this.interactionsService.showAlert('Error getting Widget with Id "' + widgetId + '". ' + errMessage, 'danger', true);
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }
        );

    });
  }

  /**
   * Update widget object
   * @param widget updated widget object
   */
  updateWidget(widget: Widget) {
    this.widgetService.updateWidget(widget._id, widget)
      .subscribe(
      (updatedWidget) => {
        this.interactionsService.showAlert('Widget updated successfully', 'success', true);
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (err) => {
        this.interactionsService.showAlert('Widget update failed', 'danger');
      }
      );
  }

  deleteWidget(widgetId: string) {
    this.widgetService.deleteWidget(widgetId)
      .subscribe(
      (deletedWidget) => {
        this.interactionsService.showAlert('Widget deleted successfully', 'success', true);
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (err) => {
        console.error('Error deleting widget. ', err);
        const errMessage = JSON.parse(err.error);
        this.interactionsService.showAlert('Oh Snap! Widget delete failed. ' + errMessage, 'danger');
      }
      );
  }

}
