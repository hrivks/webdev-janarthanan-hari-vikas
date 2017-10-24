import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/model';
import { WebsiteService } from '../../../services/website.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  // properties
  userId: string;
  websiteId: string;
  website: Website;
  showDeleteConfirmation: boolean;
  @ViewChild('websiteEditForm') websiteEditForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private websiteService: WebsiteService,
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }

  ngOnInit() {
    this.showDeleteConfirmation = false;
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.interactionsService.showLoader(true);
      this.websiteService.findWebsiteById(this.websiteId)
        .finally(() => { this.interactionsService.showLoader(false); })
        .subscribe(
        (website) => {
          if (website) {
            this.website = website;
          } else {
            console.log('Website with Id ' + this.websiteId + ' does not exist');
            this.interactionsService.showAlert('Website with Id ' + this.websiteId + ' does not exist', 'danger', true);
            this.router.navigate(['../'], { relativeTo: this.activatedRoute });
          }
        },
        (err) => {
          this.errorHanderService.handleError('Error getting Website with Id ' + this.websiteId, err);
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }
        );

    });
  }

  /**
   * Save changes to website object
   */
  saveChanges() {
    if (this.websiteEditForm.invalid) {
      // touch controls to highlight validation
      this.websiteEditForm.controls.name.markAsTouched({ onlySelf: true });
    } else {
      this.interactionsService.showLoader(true);
      this.websiteService.updateWebsite(this.websiteId, this.website)
        .finally(() => { this.interactionsService.showLoader(false); })
        .subscribe(
        (updatedWebsite) => {
          if (updatedWebsite) {
            this.interactionsService.showAlert('Website saved successfully', 'success', true);
            this.router.navigate(['../'], { relativeTo: this.activatedRoute });
          } else {
            console.log('error saving website');
            this.interactionsService.showAlert('Oh! Snap! Website update failed. Try again', 'danger');
          }
        },
        (err) => {
          this.errorHanderService.handleError('Error saving website', err);
        }
        );

    }
  }

  /**
   * Delete current website
   */
  deleteWebsite() {
    this.interactionsService.showLoader(true);
    this.websiteService.deleteWebsite(this.websiteId)
      .finally(() => { this.interactionsService.showLoader(false); })
      .subscribe(
      (deletedWebsite) => {
        if (deletedWebsite) {
          this.interactionsService.showAlert('Website deleted successfully', 'success', true);
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        } else {
          this.interactionsService.showAlert('Website deletion failed. Refresh page and try again', 'danger');
        }
      },
      (err) => {
        this.errorHanderService.handleError('Error deleting website', err);
      }
      );

  }

}
