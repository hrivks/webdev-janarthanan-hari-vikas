import { Component, OnInit } from '@angular/core';
import { InteractionsService } from '../../../services/interactions.service.client';

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
    this.interactionsService.registerAlertCallback((d) => { this.showAlert(d); });
  }

  /**
   * show alert on page
   * @param data alert data
   */
  showAlert(data: { text: string, type?: string, autoClose?: boolean }) {
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
