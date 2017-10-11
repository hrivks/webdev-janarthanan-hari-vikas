import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { AppConstants } from '../../../app.constant';
import { FooterLink } from '../../../model/ui-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // properties
  @Input() loggedInUserId: string;
  private links: FooterLink[];

  constructor(private router: Router,
    private authService: AuthService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {
    this.links = [];
    // register callback for adding links to footer dynamically
    this.interactionsService.registerCallback(AppConstants.EVENTS.addFooterLink, (link) => { this.addLink(link); });
    this.interactionsService.registerCallback(AppConstants.EVENTS.clearFooterLink, (link) => { this.clearLinks(); });
  }

  /**
   * Add a link to footer
   * @param link link object to add
   */
  addLink(link: FooterLink) {
    console.log(link);
    if (link.icon || link.text) {
      this.links.push(link);
    }
  }

  /**
   * Clear all links
   */
  clearLinks() {
    this.links = [];
  }

  /**
   * On link click
   * @param link link object associated with the clicke link
   */
  linkClicked(link: FooterLink) {
    if (link.onClick) {
      link.onClick();
    } else if (link.routerLink) {
      this.router.navigate(link.routerLink);
    }
  }

}
