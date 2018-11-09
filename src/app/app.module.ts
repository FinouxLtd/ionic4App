import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LinkedIn } from '@ionic-native/linkedin/ngx';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// provider
import {HttpServiceService} from '../providers/http-service/http-service.service';
import { config } from '../shared/config';

// Plugin
// import { AndroidPermissions} from '@ionic-native/android-permissions';
//  import { SMS } from '@ionic-native/sms';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    InAppBrowser,
    OneSignal,
    Facebook,
    GooglePlus,
    LinkedIn,
    GoogleMaps,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'config', useValue: config},
    HttpServiceService
    // AndroidPermissions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
