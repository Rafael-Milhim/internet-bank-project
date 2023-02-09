import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-internet-banking',
  templateUrl: './internet-banking.component.html',
  styleUrls: ['./internet-banking.component.scss']
})
export class InternetBankingComponent {

  public showStatement: boolean = false
  public showDeposit: boolean = false
  public showTransfer: boolean = false

  public reciverFeedback(resp: any){
    if (resp === 'Extrato'){
      this.showStatement = true
      this.showDeposit = false
      this.showTransfer = false
    }else if (resp === 'Depositar'){
      this.showStatement = false
      this.showDeposit = true
      this.showTransfer = false
    }else{
      this.showStatement = false
      this.showDeposit = false
      this.showTransfer = true
    }
  }

  public rootImgEye = '../../assets/eye__visible_hide_hidden.svg'

  public dataBase: Array<{ name: string, balence: number}> = [
    {
      name: 'Rafael de Oliveira Milhim',
      balence: 12653.00,
  }
]

  public moneyShow: string = '- - - - -'
  
  @Output() public logoutCheckerEmit = new EventEmitter()

  public logout() {
    this.logoutCheckerEmit.emit(false)
  }

  showBalance() {
    this.rootImgEye = this.rootImgEye === '../../assets/eye__visible_hide_hidden.svg' ? '../../assets/eye__visible_show_hidden.svg' : '../../assets/eye__visible_hide_hidden.svg'
    this.moneyShow = this.moneyShow === '- - - - -' ? `R$ ${this.convertMoney(this.dataBase[0].balence)}` : '- - - - -'
  }

  reciverDeposit(valor: string){
    if (valor.indexOf(',') !== -1 && valor.indexOf('.') === -1 && valor.indexOf(',') === valor.length-3 || valor.indexOf('.') !== -1 && valor.indexOf(',') === -1 && valor.indexOf('.') === valor.length-3){
      this.dataBase[0].balence += Number(valor.replace(',', '.'))
      this.moneyShow = this.moneyShow === '- - - - -' ? '- - - - -' : `R$ ${this.convertMoney(this.dataBase[0].balence)}`
    }
  }

  reciverTransfer(valor: string){
    if (String(valor).indexOf(',') !== -1){
      valor = String(valor).replace(',', '.')
    }
    if(Number(valor) < this.dataBase[0].balence){
      this.dataBase[0].balence -= Number(valor)
      this.moneyShow = this.moneyShow === '- - - - -' ? '- - - - -' : `R$ ${this.convertMoney(this.dataBase[0].balence)}`
    }else {
      alert('Saldo insuficiente')
    }
  }

  convertMoney(num: number){
    if (String(num).indexOf('.') !== -1){
      return Number(String(num).replace('.', ','))
    }else {
      return String(num)+',00'
    }
  }


}
