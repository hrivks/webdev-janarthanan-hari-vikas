import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../../../model/model';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  // properties
  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
