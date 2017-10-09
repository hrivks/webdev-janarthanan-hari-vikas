import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../../../model/model';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  // properties
  @Input() widget: Widget;

  constructor() { }

  ngOnInit() { }

}
