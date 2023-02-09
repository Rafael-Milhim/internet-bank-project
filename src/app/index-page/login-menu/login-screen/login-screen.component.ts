import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {

  public dadosLogin: { agencia: number, conta: number, senha: number } = {
    agencia: 1234,
    conta: 1234567,
    senha: 123456789
  }

  @Input() public showLoginScreen: boolean = false

  @Output() public loginChecker = new EventEmitter()

    public submitForm(form: any) {
      if (form.value.agencia == this.dadosLogin.agencia && form.value.conta == this.dadosLogin.conta && form.value.senha == this.dadosLogin.senha){
        return this.loginChecker.emit(true)
      }else{
        alert('Senha incorreta')
        return this.loginChecker.emit(false)
      }
  }
}
