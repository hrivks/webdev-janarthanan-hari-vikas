import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../../model/model';
import { WidgetService } from '../../../../services/widget.service.client';
import { InteractionsService } from '../../../../services/interactions.service.client';

@Component({
  selector: 'app-widget-image-edit',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageEditComponent implements OnInit {

  // properties
  @Input() widget: Widget;
  @Output() updateWidget = new EventEmitter<Widget>();
  @Output() deleteWidget = new EventEmitter<string>();
  @ViewChild('widgetImageEditForm') widgetImageEditForm: NgForm;
  private showDeleteConfirmation: Boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService,
    private interactionsService: InteractionsService) {
      this.showDeleteConfirmation = false;
    }

  ngOnInit() {
  }

  /**
   * Save changes to widget
   */
  saveChanges() {
    if (this.widgetImageEditForm.invalid) {
      // touch controls to trigger validation messages
      this.widgetImageEditForm.controls.name.markAsTouched({ onlySelf: true });
      this.widgetImageEditForm.controls.url.markAsTouched({ onlySelf: true });
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
