import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-ib',
  templateUrl: './menu-ib.component.html',
  styleUrls: ['./menu-ib.component.scss']
})
export class MenuIbComponent {
  @Output() public menuSelect = new EventEmitter()

  menuSelectResp(resp: any) {
    this.menuSelect.emit(resp)
  }

}
