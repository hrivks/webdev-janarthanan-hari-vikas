import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetType } from '../../../model/model';
import { WidgetService } from '../../../services/widget.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  // properties
  widgetTypes: string[];
  pageId: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {

    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageId = params['pid'];
    });

    this.widgetTypes = [];
    for (const w in WidgetType) {
      if (typeof WidgetType[w] === 'number') {
        this.widgetTypes.push(w);
      }
    }
  }

  /**
   * Create widget of specified type
   * @param type Type of widget to create
   */
  createWidget(type: string) {
    const newWidget = new Widget();
    newWidget.widgetType = WidgetType[type];
    this.widgetService.createWidget(this.pageId, newWidget).
      subscribe(
      (createdWidget) => {
        this.router.navigate(['../' + createdWidget._id], { relativeTo: this.activatedRoute });
      },
      (err) => {
        console.error('Error creating widget. ', err);
        const errMessage = JSON.parse(err.error);
        this.interactionsService.showAlert('Uhhhh! Error creating widget. ' + errMessage);
      }
      );

  }

}
