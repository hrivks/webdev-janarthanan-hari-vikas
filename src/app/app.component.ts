import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service.client';
import { InteractionsService } from './services/interactions.service.client';
import { AppConstants } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // properties
  private loggedInUserId: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private authService: AuthService,
    private interactionsService: InteractionsService) {

    // set title on route change
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        // check user logged in
        const requireLogin = !this.activatedRoute.snapshot.firstChild.data.skipAuth;
        if (requireLogin) {
          // get logged in user
          this.loggedInUserId = this.authService.getLoggedInUser()._id;
        } else {
          this.loggedInUserId = null;
        }

        // set page title
        title.setTitle(this.activatedRoute.snapshot.firstChild.data.title || 'webdev-hari-vikas-janarthanan');

        // clear dynamic footer links set by previous page
        this.interactionsService.invoke(AppConstants.EVENTS.clearFooterLink);
      }
    });

  }
}
