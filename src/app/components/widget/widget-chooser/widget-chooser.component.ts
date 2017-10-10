import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetType } from '../../../model/model';
import { WidgetService } from '../../../services/widget.service.client';

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
    private widgetService: WidgetService) { }

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
    let newWidget = new Widget();
    newWidget.widgetType = WidgetType[type];
    newWidget = this.widgetService.createWidget(this.pageId, newWidget);
    if (newWidget) {
      console.log('widget creation successful');
      this.router.navigate(['../' + newWidget._id], { relativeTo: this.activatedRoute });
    } else {
      console.log('widget creation failed');
    }
  }

}
