import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Widget } from '../../../../model/model';

@Component({
  selector: 'app-widget-html-edit',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlEditComponent implements OnInit {

  // properties
  @Input() widget: Widget;
  @Output() updateWidget = new EventEmitter<Widget>();
  @Output() deleteWidget = new EventEmitter<string>();
  @ViewChild('widgetHtmlEditForm') widgetHtmlEditForm: NgForm;
  private showDeleteConfirmation: Boolean;

  constructor() {
    this.showDeleteConfirmation = false;
  }

  ngOnInit() {
  }

  /**
   * Save changes to widget
   */
  saveChanges() {
    if (this.widgetHtmlEditForm.invalid) {
      // touch controls to trigger validation messages
      this.widgetHtmlEditForm.controls.name.markAsTouched({ onlySelf: true });
    } else {
      this.updateWidget.emit(this.widget);
    }

  }

  /**
   * Delete current widget
   */
  delete() {
    this.deleteWidget.emit(this.widget._id);
  }

}
