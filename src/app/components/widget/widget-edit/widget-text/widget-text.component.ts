import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Widget } from '../../../../model/model';

@Component({
  selector: 'app-widget-text-edit',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextEditComponent implements OnInit {

  // properties
  @Input() widget: Widget;
  @Output() updateWidget = new EventEmitter<Widget>();
  @Output() deleteWidget = new EventEmitter<string>();
  @ViewChild('widgetTextEditForm') widgetTextEditForm: NgForm;
  private showDeleteConfirmation: Boolean;

  constructor() {
    this.showDeleteConfirmation = false;
  }

  ngOnInit() {
    this.widget.rows = this.widget.rows || 1;
  }

  /**
   * Save changes to widget
   */
  saveChanges() {
    this.updateWidget.emit(this.widget);
  }

  /**
   * Delete current widget
   */
  delete() {
    this.deleteWidget.emit(this.widget._id);
  }

}
