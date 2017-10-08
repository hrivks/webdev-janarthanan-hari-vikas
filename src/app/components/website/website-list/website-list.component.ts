import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/model';
import { WebsiteService } from '../../../services/website.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  // properties
  @Input() compactMode: boolean; // compact mode for display in sidebar
  userId: string;
  websites: Website[];
  constructor(private activatedRoute: ActivatedRoute,
    private websiteService: WebsiteService,
    private interactionsService: InteractionsService) { }


  ngOnInit() {
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });

    this.getWebsites();

    // register for website change event
    this.interactionsService.registerCallback('websiteUpdated', () => { this.getWebsites(); });
  }

  /**
   * Get list of websites for the current user
   */
  getWebsites() {
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }
}
