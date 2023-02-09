import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {

  @Output() public loginCheckerEmit = new EventEmitter()

  reciverFeedback(resposta:boolean){
    this.loginCheckerEmit.emit(resposta)
  }

  public showHideLogin: boolean = false
  public openLoginMenu() {
    this.showHideLogin = this.showHideLogin === false ? true : false
  }
}
