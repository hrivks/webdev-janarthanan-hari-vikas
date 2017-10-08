import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../model/model';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';


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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  register() {
    let newUser = new User();
    newUser.username = this.username;
    newUser.password = this.password;

    newUser = this.userService.createUser(newUser);
    this.router.navigate(['/user', newUser._id]);
  }
}
