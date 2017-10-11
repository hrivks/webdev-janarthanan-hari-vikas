import { Component, OnInit } from '@angular/core';
import { InteractionsService } from '../../../services/interactions.service.client';
import { AppConstants } from '../../../app.constant';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  // properties
  private show: boolean;

  constructor(private interactionsService: InteractionsService) { }

  ngOnInit() {
    this.show = false;
    this.interactionsService.registerCallback(AppConstants.EVENTS.showLoader, (show) => { this.showLoader(show); });
  }

  /**
   * Show / Hide loading screen
   * @param show true to show; false to hide
   */
  showLoader(show: boolean) {
    this.show = show;
  }

}
