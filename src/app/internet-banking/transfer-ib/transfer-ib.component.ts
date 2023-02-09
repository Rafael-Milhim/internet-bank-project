import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-ib',
  templateUrl: './transfer-ib.component.html',
  styleUrls: ['./transfer-ib.component.scss']
})
export class TransferIbComponent {

  @Output() public transferSuccess = new EventEmitter()

  submitTransfer(form: any) {
    if (form.value.senha !== '123456789'){
      alert('Senha incorreta')
    }else if (form.value.senha === '123456789' && form.value.valor.indexOf(',') === -1 && form.value.valor.indexOf('.') === -1|| form.value.senha === '123456789' && form.value.valor.indexOf('.') === -1 && form.value.valor.indexOf(',') === -1){
      alert('Por favor use , ou . para representar os centavos e digite nesse formato "251,00"')
    }else {
      this.transferSuccess.emit(String(form.value.valor))
    }
  }
}
