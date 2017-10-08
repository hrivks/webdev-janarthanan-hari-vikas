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
    });

    this.website = this.websiteService.findWebsiteById(this.websiteId);
  }

  /**
   * Save changes to website object
   */
  saveChanges() {
    if (this.websiteEditForm.invalid) {
      // touch controls to highlight validation
      this.websiteEditForm.controls.name.markAsTouched({ onlySelf: true });
    } else {
      this.websiteService.updateWebsite(this.websiteId, this.website);
      console.log('website saved successfully');
      this.router.navigate(['/user', this.userId, 'website']);
    }
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['/user', this.userId, 'website']);
  }

}
