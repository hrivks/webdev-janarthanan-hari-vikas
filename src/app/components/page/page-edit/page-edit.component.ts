import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../model/model';
import { PageService } from '../../../services/page.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  // properties
  userId: string;
  websiteId: string;
  pageId: string;
  page: Page;
  showDeleteConfirmation: boolean;
  @ViewChild('pageEditForm') pageEditForm: NgForm;

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
      this.pageId = params['pid'];
      this.pageService.findPageById(this.pageId).
        subscribe(
        (page) => {
          this.page = page;
        },
        (err) => {
          this.errorHanderService.handleError('Oopsie! Error retrieving page with id ' + this.pageId, err, true);
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }
        );
    });
  }

  /**
   * Save changes to page object
   */
  saveChanges() {
    if (this.pageEditForm.invalid) {
      // touch controls to highlight validation
      this.pageEditForm.controls.name.markAsTouched({ onlySelf: true });
    } else {
      this.pageService.updatePage(this.pageId, this.page)
        .subscribe(
        (updatedPage) => {
          this.interactionsService.showAlert('Page saved successfully', 'success', true);
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        },
        (err) => {
          this.errorHanderService.handleError('Oooh Snap! Error saving page', err);
        }
        );
    }
  }

  /**
   * Delete current page
   */
  deletePage() {
    this.pageService.deletePage(this.pageId)
      .subscribe(
      (deletedPage) => {
        this.interactionsService.showAlert('Page deleted successfully', 'success', true);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      },
      (err) => {
        this.errorHanderService.handleError('Uh ho! Page deletion unsuccessful', err);
      }
      );
  }

}
