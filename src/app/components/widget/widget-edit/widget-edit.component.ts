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
  widgetType = WidgetType;
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const widgetId = params['wgid'];
      const widget = this.widgetService.findWidgetById(widgetId);
      if (widget) {
        this.widget = widget;
      } else {
        this.interactionsService.showAlert('Widget with Id "' + widgetId + '" does not exist', 'danger', true);
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      }
    });
  }

}
