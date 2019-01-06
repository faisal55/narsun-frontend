import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatNativeDateModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginModule} from './login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Api} from './api.service';
import {AuthService} from './services/authRest.service';
import {AuthGuard} from './auth.guard';
import {SettingRestService} from './services/settingRest.service';
import {UserRestService} from './services/userRest.service';
import {DeviceRestService} from './services/deviceRest.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    LoginModule,
    MatNativeDateModule
  ],
  providers: [
    Api,
    AuthService,
    AuthGuard,
    SettingRestService,
    UserRestService,
    DeviceRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
