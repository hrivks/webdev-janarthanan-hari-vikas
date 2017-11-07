import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../../../../model/model';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  // properties
  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
