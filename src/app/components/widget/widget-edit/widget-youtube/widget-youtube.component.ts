import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../../model/model';
import { WidgetService } from '../../../../services/widget.service.client';
import { InteractionsService } from '../../../../services/interactions.service.client';

@Component({
  selector: 'app-widget-youtube-edit',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeEditComponent implements OnInit {

  // properties
  @Input() widget: Widget;
  @Output() updateWidget = new EventEmitter<Widget>();
  @Output() deleteWidget = new EventEmitter<string>();
  @ViewChild('widgetYoutubeEditForm') widgetYoutubeEditForm: NgForm;
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
    if (this.widgetYoutubeEditForm.invalid) {
      // touch controls to trigger validation messages
      this.widgetYoutubeEditForm.controls.name.markAsTouched({ onlySelf: true });
      this.widgetYoutubeEditForm.controls.url.markAsTouched({ onlySelf: true });
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
