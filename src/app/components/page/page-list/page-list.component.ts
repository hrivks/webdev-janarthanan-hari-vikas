import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../model/model';
import { PageService } from '../../../services/page.service.client';
import { WebsiteService } from '../../../services/website.service.client';
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
    private router: Router,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];

      // check if website exists
      this.websiteService.findWebsiteById(this.websiteId)
        .subscribe(
        (websiteExists) => {
          if (websiteExists) {
            this.getPages();
          } else {
            this.interactionsService.showAlert('Website with Id ' + this.websiteId + ' does not exist.');
            this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
          }
        }
        );

    });

    this.getPages();

    // register for website change event
    this.interactionsService.registerCallback('pageUpdated', () => { this.getPages(); });
  }

  /**
   * Get list of Pages for the current user
   */
  getPages() {
    this.pageService.findPagesBywebsiteId(this.websiteId)
      .subscribe(
      (pages) => {
        this.pages = pages;
      },
      (err) => {
        const errMessage = JSON.parse(err.error);
        this.interactionsService.showAlert('Oops! Can\'t load pages list. ' + errMessage);
        console.error('Error getting pages list. ', err);
      }
      );
  }
}
