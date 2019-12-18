import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { auth } from 'firebase/app';



@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  public name: string;
  public photo: string;


  constructor(public authService: AuthService) { 
    var profile = JSON.parse(localStorage.getItem('user'));
    console.log(profile);

    this.name = profile.displayName;
    this.photo = profile.photoURL;
  }

  ngOnInit() {
  }

}
