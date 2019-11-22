import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  auth = {
    email: "",
    password: ""
  };

  constructor() { }

  ngOnInit() {
    document.querySelector('ion-toolbar').style.background="#000";

    //const color = el.style.getPropertyValue('--charcoal');
  }


  login() {
     
    firebase.auth().signInWithEmailAndPassword(this.auth.email, this.auth.password).then(function (result) {
      console.log(result);
    })
     .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        debugger;

      });

  }




}
