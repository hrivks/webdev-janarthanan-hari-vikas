import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../model/model';
import { UserService } from '../../../services/user.service.client';
import { AuthService } from '../../../services/auth.service.client';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // properties
  username: string;
  password: string;
  verifyPassword: string;
  registrationErrors: any = {};

  constructor(private userService: UserService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() { }

  register() {
    let newUser = new User();
    newUser.username = this.username;
    newUser.password = this.password;

    newUser = this.userService.createUser(newUser);
    if (newUser) {
      const loggedInUser = this.authService.login(newUser.username, newUser.password);
      if (loggedInUser) {
        this.router.navigate(['/user', loggedInUser._id]);
      }
    }

  }
}
