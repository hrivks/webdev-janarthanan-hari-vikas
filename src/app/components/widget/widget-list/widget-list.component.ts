import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetType } from '../../../model/model';
import { WidgetService } from '../../../services/widget.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';
import { AppConstants } from '../../../app.constant';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  // properties
  WidgetType = WidgetType;
  widgets: Widget[];
  private pageId: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService,
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageId = params['pid'];
      this.interactionsService.showLoader(true);
      this.widgetService.findWidgetsByPageId(this.pageId)
        .finally(() => { this.interactionsService.showLoader(false); })
        .subscribe(
        (widgets) => {
          widgets = widgets.sort((a, b) => {
            if (a.order < b.order) {
              return -1;
            } else if (a.order > b.order) {
              return 1;
            } else {
              return 0;
            }
          });

          this.widgets = widgets;
        },
        (err) => {
          this.errorHanderService.handleError('Oops! Error getting list of widgets', err);
        }
        );

      // add page specific links to footer
      this.interactionsService.invoke(AppConstants.EVENTS.addFooterLink, { icon: 'fa-play fa-lg' });
      this.interactionsService.invoke(AppConstants.EVENTS.addFooterLink, { icon: 'fa-eye fa-lg' });

    });
  }

  /**
   * Update widget order
   * @param newPosition new position of the widget
   */
  updateSortOrder(newPosition: { initial: number, final: number }) {
    if (newPosition.initial === newPosition.final) {
      return;
    }
    this.widgetService.reorderWidget(this.pageId, this.widgets[newPosition.initial], newPosition.initial, newPosition.final)
      .subscribe(
      (widgets) => {
        // this.widgets = widgets;
      },
      (err) => {
        this.errorHanderService.handleError('Oops! Something went wrong in saving widget order', err, true);
      }
      );
  }

}
