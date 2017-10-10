import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/model';
import { AuthService } from '../../../services/auth.service.client';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // properties
  loggedInUser: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

}
