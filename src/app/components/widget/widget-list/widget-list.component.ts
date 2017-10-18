import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetType } from '../../../model/model';
import { WidgetService } from '../../../services/widget.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
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
    private interactionsService: InteractionsService) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageId = params['pid'];
      this.widgetService.findWidgetsByPageId(this.pageId)
        .subscribe(
        (widgets) => {
          this.widgets = widgets;
        },
        (err) => {
          console.error('Error getting list of widgets', err);
          const errMessage = JSON.parse(err.error);
          this.interactionsService.showAlert('Oops! Error getting list of widgets. ' + errMessage);
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
    console.log(newPosition);
    this.widgetService.reorderWidget(this.pageId, this.widgets[newPosition.initial], newPosition.initial, newPosition.final)
      .subscribe(
      (widgets) => {
        console.log('Widget order updated');
        // this.widgets = widgets;
      },
      (err) => {
        console.error('Error updating widget order. ', err);
        const errMessage = JSON.parse(err);
        this.interactionsService.showAlert('Oops! Something went wrong in saving widget order. ' + errMessage, 'danger', true);
      }
      );
  }

}
