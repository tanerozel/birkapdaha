import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { from } from 'rxjs';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router, public authService: AuthService) {
 
    if (this.authService.isLoggedIn) {
      this.route.navigateByUrl("/order-preparing");
    }

  }
  home() {
    this.route.navigateByUrl("/order-preparing");
  }

  ngOnInit() {
    document.querySelector('ion-toolbar').style.background = "#000";
    console.log(this.authService.isLoggedIn);

    //const color = el.style.getPropertyValue('--charcoal');
  }







}
