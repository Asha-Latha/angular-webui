  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
//import { HomeComponent } from './Component/home/home.component';
//import { LoginComponent } from './login/login.component';
//import { SignupComponent } from './signup/signup.component';
import { UserService } from './services/user/user.service';
//import { RegisterComponent } from './register/register.component';
import { ShowWalletComponent } from './Component/show-wallet/show-wallet.component';
import { WalletComponent } from './Component/wallet/wallet.component';
import { SuperadminIssuersComponent } from './Component/superadmin-issuers/superadmin-issuers.component';
import { SettingsComponent } from './Component/settings/settings.component';
import { RegisterComponent } from './Component/register/register.component';

import { HomeComponent } from './Component/home/home.component';
//import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    // LoginComponent,
    // SignupComponent,
    // RegisterComponent,
    ShowWalletComponent,
    WalletComponent,
    SuperadminIssuersComponent,
    SettingsComponent,
    RegisterComponent,
    HomeComponent,
   // LogComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
