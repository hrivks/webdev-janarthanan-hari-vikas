import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Website } from '../../../model/model';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  // properties
  userId: string;
  websites: Website[];
  constructor(private activatedRoute: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {
    // get userid parameter route
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });

    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }
}
