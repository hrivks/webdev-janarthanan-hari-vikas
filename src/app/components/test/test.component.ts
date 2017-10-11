import { Component, OnInit, Injectable } from '@angular/core';
import { TestService } from '../../services/test.service.client';
import { InteractionsService } from '../../services/interactions.service.client';
import { AppConstants } from '../../app.constant';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _testService: TestService, private interactionsService: InteractionsService) { }


  alertMessage: Boolean = false;
  successMessage: Boolean = false;
  message: String;
  messages: any[] = [];
  ngOnInit() {

  }

  testIt() {
    
  }

}
