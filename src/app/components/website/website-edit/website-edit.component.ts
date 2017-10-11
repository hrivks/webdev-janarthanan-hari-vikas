import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/model';
import { WebsiteService } from '../../../services/website.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';

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
    private interactionsService: InteractionsService) { }

  ngOnInit() {
    this.showDeleteConfirmation = false;
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      const website = this.websiteService.findWebsiteById(this.websiteId);
      if (website) {
        this.website = website;
      } else {
        console.log('Website with Id ' + this.websiteId + ' does not exist');
        this.website = new Website();
        this.interactionsService.showAlert('Website with Id ' + this.websiteId + ' does not exist', 'danger', true);
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      }
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
      this.website = this.websiteService.updateWebsite(this.websiteId, this.website);
      if (this.website) {
        console.log('website saved successfully');
        this.interactionsService.showAlert('Website saved successfully', 'success', true);
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      } else {
        console.log('error saving website');
        this.interactionsService.showAlert('Website update failed', 'danger');
      }
    }
  }

  /**
   * Delete current website
   */
  deleteWebsite() {
    const deletedWebsite = this.websiteService.deleteWebsite(this.websiteId);

    if (deletedWebsite) {
      this.interactionsService.showAlert('Website deleted successfully', 'success', true);
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    } else {
      this.interactionsService.showAlert('Website deletion failed', 'danger');
    }

  }

}
