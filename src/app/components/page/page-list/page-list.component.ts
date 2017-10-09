import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../model/model';
import { PageService } from '../../../services/page.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // properties
  @Input() compactMode: boolean; // compact mode for display in sidebar
  userId: string;
  websiteId: string;
  pages: Page[];
  constructor(private activatedRoute: ActivatedRoute,
    private pageService: PageService,
    private interactionsService: InteractionsService) { }


  ngOnInit() {
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
    });

    this.getPages();

    // register for website change event
    this.interactionsService.registerCallback('pageUpdated', () => { this.getPages(); });
  }

  /**
   * Get list of Pages for the current user
   */
  getPages() {
    this.pages = this.pageService.findPageBywebsiteId(this.websiteId);
  }
}
