import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { AuthService } from '../../../services/auth.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';
import { AppConstants } from '../../../app.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login form
  @ViewChild('loginForm') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  loginError: string;
  private fbLoginRedirectUrl: string;

  constructor(private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private interactionsService: InteractionsService,
    private errorHanderService: ErrorHandlerService) { }

  ngOnInit() {
    this.fbLoginRedirectUrl = AppConstants.ENDPOINT.baseUrl + '/auth/facebook';
  }

  login() {
    this.interactionsService.showLoader(true);
    this.authService.login(this.username, this.password)
      .finally(() => { this.interactionsService.showLoader(false); })
      .subscribe(
      (user) => {
        this.router.navigate(['/profile']);
      },
      (err) => {
        console.error('Error occured during login.', err);
        let errMessage = '';
        if (err.status === 401) {
          errMessage = 'Invalid Credentials';
        } else {
          errMessage = this.errorHanderService.getErrorMessage(err);
        }
        this.loginError = 'Error. ' + errMessage;
      }
      );

  }

}
