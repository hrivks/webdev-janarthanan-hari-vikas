import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetType } from '../../../model/model';
import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  // properties
  widgetType = WidgetType;
  widgets: Widget[];


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const pageId = params['pid'];
      this.widgets = this.widgetService.findWidgetsByPageId(pageId);
    });
  }

}
