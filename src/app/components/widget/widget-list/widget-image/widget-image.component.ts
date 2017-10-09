import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../../../model/model';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  // properties
  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
