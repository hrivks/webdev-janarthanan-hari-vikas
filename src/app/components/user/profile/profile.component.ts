import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../model/model';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  userId: string;
  user: User;
  profileErrors: any = {
    hasError: false
  };

  @ViewChild('f') profileForm: NgForm;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });

    this.user = this.userService.findUserById(this.userId);
  }

  saveProfile() {
    console.log('hi');
    if (!this.profileForm.valid) {
      return;
    }

    //#region: validate form
    // reset
    this.profileErrors = {
      hasError: false
    };

    // username validation

    const userExists = this.userService.findUserByUsername(this.user.username);
    if (userExists._id !== this.user._id) {
      this.profileErrors.username = 'Username already exists. Please try another username';
      this.profileErrors.hasError = true;
    } else if (this.testInvalidString(this.user.username, true)) {
      this.profileErrors.username = 'Invalid username. Only alphabets and . allowed';
      this.profileErrors.hasError = true;
    }

    // first name validation

    if (this.testInvalidString(this.user.firstName)) {
      this.profileErrors.firstName = 'Invalid Name. Only alphabets allowed';
      this.profileErrors.hasError = true;
    }

    // last name validation

    if (this.testInvalidString(this.user.lastName)) {
      this.profileErrors.lastName = 'Invalid Name. Only alphabets allowed';
      this.profileErrors.hasError = true;
    }

    //#endregion
    if (!this.profileErrors.hasError) {
      this.user = this.userService.updateUser(this.userId, this.user);
    }
  }

  /** Test if the given string contains characters apart from alphabets */
  private testInvalidString(s: string, allowDot: boolean = false) {
    let regEx: RegExp;
    if (allowDot) {
      regEx = new RegExp('[^a-zA-Z.]');
    } else {
      regEx = new RegExp('[^a-zA-Z]');
    }
    return regEx.test(s);
  }



}
