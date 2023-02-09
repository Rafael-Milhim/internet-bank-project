import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deposit-ib',
  templateUrl: './deposit-ib.component.html',
  styleUrls: ['./deposit-ib.component.scss']
})
export class DepositIbComponent {

  @Output() public depositSuccess = new EventEmitter()

  submitDeposit(form: any) {
    if (form.value.senha !== '123456789'){
      alert('Senha incorreta')
    }else if (form.value.senha === '123456789' && form.value.valor.indexOf(',') === -1 && form.value.valor.indexOf('.') === -1|| form.value.senha === '123456789' && form.value.valor.indexOf('.') === -1 && form.value.valor.indexOf(',') === -1){
      alert('Por favor use , ou . para representar os centavos e digite nesse formato "251,00"')
    }else {
      this.depositSuccess.emit(String(form.value.valor))
    }
  }



}