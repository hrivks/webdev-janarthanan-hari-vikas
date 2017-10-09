import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../model/model';
import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  // properties
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute,
     private router: Router,
    private widgetService: WidgetService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const widgetId = params['wgid'];
      this.widget = this.widgetService.findWidgetById(widgetId);
    });
  }

}
