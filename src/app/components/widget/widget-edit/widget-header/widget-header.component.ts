import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../../model/model';
import { WidgetService } from '../../../../services/widget.service.client';
import { InteractionsService } from '../../../../services/interactions.service.client';

@Component({
  selector: 'app-widget-header-edit',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderEditComponent implements OnInit {

  // properties
  @Input() widget: Widget;
  @Output() updateWidget = new EventEmitter<Widget>();
  @Output() deleteWidget = new EventEmitter<string>();
  @ViewChild('widgetHeaderEditForm') widgetHeaderEditForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {
  }

  /**
   * Save changes to widget
   */
  saveChanges() {
    if (this.widgetHeaderEditForm.invalid) {
      // touch controls to trigger validation messages
      this.widgetHeaderEditForm.controls.name.markAsTouched({ onlySelf: true });
      this.widgetHeaderEditForm.controls.text.markAsTouched({ onlySelf: true });
    } else {

      if (this.widget.size && (this.widget.size > 6 || this.widget.size < 1)) {
        this.widgetHeaderEditForm.controls.size.setErrors({ 'invalid': true });
        return;
      }

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
