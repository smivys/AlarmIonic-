import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//from '@angular/fire'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AlarmListPage } from '../pages/alarm-list/alarm-list';
import { TimeListPage } from '../pages/time-list/time-list'
import { NowtimeListPage } from '../pages/nowtime-list/nowtime-list'
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.config';


import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NgCalendarModule} from 'ionic2-calendar';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AlarmListPage,
    TimeListPage,
    NowtimeListPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AlarmListPage,
    TimeListPage,
    NowtimeListPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //FavoriteProvider
  ]
})
export class AppModule {}
