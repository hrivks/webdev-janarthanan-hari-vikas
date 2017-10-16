import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { AuthService } from '../../../services/auth.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';

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

  constructor(private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
      (user) => {
        this.router.navigate(['/user', user._id]);
      },
      (err) => {
        const errMessage = JSON.parse(err.error);
        this.loginError = 'Error. ' + errMessage;
        console.error('Error occured during login.', err);
      }
      );
  }

}
