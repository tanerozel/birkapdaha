import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Firbaseconfig }  from './firbaseconfig.enum';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase";

// firebase.initializeApp(Firbaseconfig);

//  firebase.auth().createUserWithEmailAndPassword("cemcakmaci@gmail.com", "2321011").catch(function(error) {
//   Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   debugger;
//   ...
// });

// firebase.auth().signInWithEmailAndPassword("cemcakmaci@gmail.com", "2321011").then(function(result) {
//   Handle Errors here.
//    console.log(result);
//   debugger;
//   ...
// })
// .catch(function(error) {
//   Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;

//   debugger;
//   ...
// });


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
