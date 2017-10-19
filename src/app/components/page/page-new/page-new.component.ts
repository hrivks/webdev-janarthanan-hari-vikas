import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../model/model';
import { PageService } from '../../../services/page.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  // properties
  userId: string;
  websiteId: string;
  pageId: string;
  page: Page;
  showDeleteConfirmation: boolean;
  @ViewChild('pageNewForm') pageNewForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private pageService: PageService,
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }

  ngOnInit() {
    this.showDeleteConfirmation = false;
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });

    this.page = new Page();
  }

  /**
   * Save changes to page object
   */
  saveChanges() {
    if (this.pageNewForm.invalid) {
      // touch controls to highlight validation
      this.pageNewForm.controls.name.markAsTouched({ onlySelf: true });
    } else {
      this.pageService.createPage(this.websiteId, this.page)
        .subscribe(
        (createdPage) => {
          this.interactionsService.showAlert('Page created successfully', 'success', true);
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        },
        (err) => {
          this.errorHanderService.handleError('oooh! Snap! Page creation failed', err);
        }
        );
    }

  }
}
