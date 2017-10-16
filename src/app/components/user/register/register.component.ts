import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../model/model';
import { UserService } from '../../../services/user.service.client';
import { AuthService } from '../../../services/auth.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';



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
    private authService: AuthService,
    private interactionsService: InteractionsService) { }

  ngOnInit() {
  }

  register() {
    const newUser = new User();
    newUser.username = this.username;
    newUser.password = this.password;

    // create new user
    this.userService.createUser(newUser)
      .subscribe(
      (registeredUser) => {
        // automatically login new user
        this.authService.login(registeredUser.username, registeredUser.password)
          .subscribe(
          (user) => {
            if (user) {
              this.router.navigate(['/user', user._id]);
            } else {
              this.interactionsService.showAlert('Login post registration unsuccessfuly');
              console.error('Login post registration unsuccessfuly', user);
            }
          },
          (err) => {
            this.interactionsService.showAlert('Error logging in post registration');
            console.error('Error logging in post registration', err);
          }
          );
      },
      (err) => {
        this.interactionsService.showAlert('Error registering user. Please try again.');
        console.error('Error registering user', err);
      }
      );
  }
}
