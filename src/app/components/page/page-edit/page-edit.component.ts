import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../model/model';
import { PageService } from '../../../services/page.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';

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
    private interactionsService: InteractionsService) { }

  ngOnInit() {
    this.showDeleteConfirmation = false;
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.page = this.pageService.findPageById(this.pageId);
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
      this.pageService.updatePage(this.pageId, this.page);
      console.log('Page saved successfully');
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    }
  }

  /**
   * Delete current page
   */
  deletePage() {
    this.pageService.deletePage(this.pageId);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }

}
