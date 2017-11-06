import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../model/model';
import { UserService } from '../../../services/user.service.client';
import { AuthService } from '../../../services/auth.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { AppConstants } from '../../../app.constant';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  userId: string;
  user: User;
  profileErrors: any;

  // user profile form
  @ViewChild('profileForm') profileForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }

  ngOnInit() {

    this.profileErrors = {
      hasError: false
    };

    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });

    this.userService.findUserById(this.userId)
      .subscribe(
      (user) => {
        if (user) {
          this.user = user;
        } else {
          this.interactionsService.showAlert('Login required', 'danger', true);
          this.router.navigate(['/login']);
        }
      },
      (err) => {
        this.errorHanderService.handleError('Error retrieving user with Id ' + this.userId, err);
      }
      );
  }

  /**
   * Logout user
   */
  logout() {
    this.authService.logout();
  }

  /** Save user profile details */
  saveProfile() {
    if (!this.profileForm.valid || this.profileForm.pristine) {
      return;
    }

    //#region: validate form
    // reset
    this.profileErrors = {
      hasError: false
    };

    // first name validation

    if (this.testInvalidString(this.user.firstName, false, true)) {
      this.profileErrors.firstName = 'Invalid Name. Only alphabets allowed';
      this.profileErrors.hasError = true;
    }

    // last name validation

    if (this.testInvalidString(this.user.lastName, false, true)) {
      this.profileErrors.lastName = 'Invalid Name. Only alphabets allowed';
      this.profileErrors.hasError = true;
    }

    // username validation
    if (this.testInvalidString(this.user.username, true)) {
      this.profileErrors.username = 'Invalid username. Only alphabets and . allowed';
      this.profileErrors.hasError = true;
    }

    //#endregion

    if (!this.profileErrors.hasError) {
      this.interactionsService.showLoader(true);
      this.userService.updateUser(this.userId, this.user)
        .finally(() => { this.interactionsService.showLoader(false); })
        .subscribe(
        (updatedUser) => {
          if (updatedUser) {
            this.user = updatedUser;
            this.interactionsService.showAlert('Profile updated successfully', 'success', true);
          } else {
            this.interactionsService.showAlert('Profile update failed');
          }
        },
        (err) => {
          this.errorHanderService.handleError('Profile update failed', err);
        }
        );
    }
  }

  /** Test if the given string contains characters apart from alphabets
   * @param s the string to be tested
   * @param allowDot true, if dot is allowed in the string
   * @returns true, if the string contains invalid characters
   */
  private testInvalidString(s: string, allowDot: boolean = false, allowSpace: boolean = false) {
    let regEx: RegExp;
    if (allowDot) {
      regEx = new RegExp('[^a-zA-Z.]');
    } else if (allowSpace) {
      regEx = new RegExp('[^a-zA-Z ]');
    } else {
      regEx = new RegExp('[^a-zA-Z]');
    }
    return regEx.test(s);
  }
}
