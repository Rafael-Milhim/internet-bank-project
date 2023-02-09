import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-index-page *ngIf="changePageIP" (loginCheckerEmit)="reciverFeedback($event)"></app-index-page>
  <app-internet-banking *ngIf="changePageIB" (logoutCheckerEmit)="reciverFeedbackLogout($event)"></app-internet-banking>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  public changePageIB: boolean = false
  public changePageIP: boolean = true

  reciverFeedback(resposta:boolean){
    this.changePageIB = resposta
    this.changePageIP = resposta === true ? false : true
  }

  reciverFeedbackLogout(resposta:boolean){
    this.changePageIB = resposta
    this.changePageIP = resposta === false ? true : false
  }

  constructor() { }

  ngOnInit(): void {
  }
}
