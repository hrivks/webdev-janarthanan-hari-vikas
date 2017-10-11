import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service.client';

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
    private authService: AuthService) {

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

        title.setTitle(this.activatedRoute.snapshot.firstChild.data.title || 'webdev-hari-vikas-janarthanan');
      }
    });

  }
}
