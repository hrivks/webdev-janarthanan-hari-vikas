import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/model';
import { UserService } from '../services/user.service.client';

@Injectable()
export class AuthService {
  // properties
  loggedInUser: User;

  api = {
    'getLoggedInUser': this.getLoggedInUser,
    'login': this.login,
    'logout': this.logout
  };

  constructor(private router: Router, private userService: UserService) { }

  /**
   * Check if user is logged in
   * @returns logged in user object; null, if user is not logged in
   */
  getLoggedInUser(): User {
    this.loggedInUser = this.loggedInUser || JSON.parse(localStorage.getItem('loggedInUser'));
    if (this.loggedInUser) {
      return Object.assign({}, this.loggedInUser);
    } else {
      this.router.navigate(['/login']);
    }
  }

  /**
   * Login user
   * @param username username
   * @param password password
   * @returns logged in user; null if login fails
   */
  login(username: string, password: string) {
    this.loggedInUser = this.userService.findUserByCredentials(username, password);
    if (this.loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
      return Object.assign({}, this.loggedInUser);
    } else {
      return null;
    }

  }

  /**
   * Logout user
   */
  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

}

