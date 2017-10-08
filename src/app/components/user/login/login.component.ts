import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';

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
  error: 'Invalid Credentials';

  constructor(private router: Router, private userService: UserService) { }

  login() {
    this.username = this.loginForm.value.usernameField;
    this.password = this.loginForm.value.passwordField;
    const user = this.userService.findUserByCredentials(this.username, this.password);
    if (user) {
      this.router.navigate(['/user', user._id]);
    }
  }

  ngOnInit() {
  }

}
