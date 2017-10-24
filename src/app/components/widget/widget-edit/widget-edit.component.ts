import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetType } from '../../../model/model';
import { WidgetService } from '../../../services/widget.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

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
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const widgetId = params['wgid'];
      this.interactionsService.showLoader(true);
      this.widgetService.findWidgetById(widgetId)
        .finally(() => { this.interactionsService.showLoader(false); })
        .subscribe(
        (widget) => {
          this.widget = widget;
        },
        (err) => {
          this.errorHanderService.handleError('Uhhhh! Error getting Widget with Id "' + widgetId + '"', err, true);
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
    this.interactionsService.showLoader(true);
    this.widgetService.updateWidget(widget._id, widget)
      .finally(() => { this.interactionsService.showLoader(false); })
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

  /**
   * Delete widget
   * @param widgetId Id of the widget to be deleted
   */
  deleteWidget(widgetId: string) {
    this.interactionsService.showLoader(true);
    this.widgetService.deleteWidget(widgetId)
      .finally(() => { this.interactionsService.showLoader(false); })
      .subscribe(
      (deletedWidget) => {
        this.interactionsService.showAlert('Widget deleted successfully', 'success', true);
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (err) => {
        this.errorHanderService.handleError('Oh Snap! Widget delete failed', err);
      }
      );
  }

}
