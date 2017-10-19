import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/model';
import { WebsiteService } from '../../../services/website.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  // properties
  userId: string;
  website: Website;
  @ViewChild('websiteNewForm') websiteNewForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private websiteService: WebsiteService,
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }

  ngOnInit() {
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });
    this.website = new Website();
    this.website.developerId = this.userId;
  }

  /**
   * create new page object
   */
  saveChanges() {
    if (this.websiteNewForm.invalid) {
      // touch controls to highlight validation
      this.websiteNewForm.controls.name.markAsTouched({ onlySelf: true });
    } else {
      this.websiteService.createWebsite(this.userId, this.website)
        .subscribe(
        (newWebsite) => {
          this.website = newWebsite;
          if (this.website) {
            this.interactionsService.showAlert('Website created successfully', 'success', true);
            this.router.navigate(['../'], { relativeTo: this.activatedRoute });
          } else {
            this.interactionsService.showAlert('Uh ho! Website creation failed. Refresh page and try again');
          }
        },
        (err) => {
          this.errorHanderService.handleError('Uh ho! Website creation failed', err);
        }
        );

    }
  }

}
