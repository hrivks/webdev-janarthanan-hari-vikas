import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/model';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

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
    private router: Router,
    private websiteService: WebsiteService,
    private userService: UserService,
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }


  ngOnInit() {
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.interactionsService.showLoader(true);
      // check if user exists
      this.userService.findUserById(this.userId)
        .finally(() => { this.interactionsService.showLoader(false); })
        .subscribe(
        (userExists) => {
          if (userExists) {
            this.getWebsites();
          } else {
            this.interactionsService.showAlert('User with Id ' + this.userId + ' does not exist. Please login again');
            this.router.navigate(['/login']);
          }
        },
        (err) => {
          this.errorHanderService.handleError('Error loading website list', err);
        }
        );

    });

    // register for website change event
    this.interactionsService.registerCallback('websiteUpdated', () => { this.getWebsites(); }, true);
  }

  /**
   * Get list of websites for the current user
   */
  getWebsites() {
    this.interactionsService.showLoader(true);
    this.websiteService.findWebsitesByUser(this.userId)
      .finally(() => { this.interactionsService.showLoader(false); })
      .subscribe(
      (websites) => {
        this.websites = websites;
      },
      (err) => {
        this.errorHanderService.handleError('Oops! Can\'t load website list', err);
      }
      );
  }
}
