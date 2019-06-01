import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginComponent } from './../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { ForgotComponent } from '../pages/forgot/forgot.component';
import { DetailsComponent } from '../pages/details/details.component';
@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
