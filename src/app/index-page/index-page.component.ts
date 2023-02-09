import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent {
  @Output() public loginCheckerEmit = new EventEmitter()

  public reciverFeedback(resp:boolean){
    this.loginCheckerEmit.emit(resp)
  }
}
