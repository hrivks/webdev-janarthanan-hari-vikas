import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget } from '../../../../model/model';
import { WidgetService } from '../../../../services/widget.service.client';
import { InteractionsService } from '../../../../services/interactions.service.client';
import { AppConstants } from '../../../../app.constant';

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
  @ViewChild('fileUpload') fileUpload;
  private showDeleteConfirmation: Boolean;
  private Endpoint = AppConstants.ENDPOINT;

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

  /**
   * Upload Image
   */
  uploadImage() {
    const file = this.fileUpload.nativeElement;
    if (file.files && file.files[0]) {
      const formData = new FormData();
      formData.append('image', file.files[0]);
      this.widgetService.uploadImage(formData)
        .subscribe(res => {
          console.log(res);
          this.widget.url = AppConstants.ENDPOINT.root + res.file;
        });
    }

  }

}
