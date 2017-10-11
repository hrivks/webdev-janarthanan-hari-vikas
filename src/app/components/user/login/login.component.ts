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
  @ViewChild('f') loginForm: NgForm;

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
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user = this.authService.login(this.username, this.password);
    if (user) {
      this.router.navigate(['/user', user._id]);
    } else {
      this.loginError = 'Invalid Credentials';
    }

  }


  test() {
    this.interactionsService.showAlert("hi", "success", true);
  }

}
