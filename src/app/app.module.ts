import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './index-page/header/header.component';
import { MenuComponent } from './index-page/menu/menu.component';
import { LoginMenuComponent } from './index-page/login-menu/login-menu.component';
import { MainContentComponent } from './index-page/main-content/main-content.component';
import { LoginScreenComponent } from './index-page/login-menu/login-screen/login-screen.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { InternetBankingComponent } from './internet-banking/internet-banking.component';
import { MenuIbComponent } from './internet-banking/menu-ib/menu-ib.component';
import { StatementIbComponent } from './internet-banking/statement-ib/statement-ib.component';
import { DepositIbComponent } from './internet-banking/deposit-ib/deposit-ib.component';
import { TransferIbComponent } from './internet-banking/transfer-ib/transfer-ib.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LoginMenuComponent,
    MainContentComponent,
    LoginScreenComponent,
    IndexPageComponent,
    InternetBankingComponent,
    MenuIbComponent,
    StatementIbComponent,
    DepositIbComponent,
    TransferIbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
