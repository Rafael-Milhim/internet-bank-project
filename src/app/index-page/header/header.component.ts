import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() public loginCheckerEmit = new EventEmitter()

  public reciverFeedback(resposta:boolean){
    this.loginCheckerEmit.emit(resposta)
  }
}
