import { Component, OnInit } from '@angular/core';
import { InteractionsService } from '../../../services/interactions.service.client';
import { AppConstants } from '../../../app.constant';
import { AlertData } from '../../../model/ui-model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  // properties
  private alertType: string;
  private alertText: string;
  private alertVisible: boolean;

  constructor(private interactionsService: InteractionsService) { }

  ngOnInit() {
    this.alertVisible = false;
    this.interactionsService.registerCallback(AppConstants.EVENTS.showAlert, (d) => { this.showAlert(d); });
  }

  /**
   * show alert on page
   * @param data alert data
   */
  showAlert(data: AlertData) {
    if (data.text) {
      this.alertText = data.text;
      this.alertType = data.type;
      this.alertVisible = true;

      if (data.autoClose) {
        setTimeout(() => {
          this.alertVisible = false;
        }, 3000);
      }
    }
  }

}
