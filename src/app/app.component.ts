import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from '../app/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 
  public appPages = [
    {
      title: 'Desteklerim',
      url: '/my-support',
      icon: 'happy'
    },
    {
      title: 'Fotoğraflarım',
      url: '/my-photos',
      icon: 'images',
    },
    {
      title: 'Profilim',
      url: '/my-profile',
      icon: 'person',
    },
    {
      title: 'Hakkımızda',
      url: '/about',
      icon: 'alert',
    },
    {
      title: 'Tanıtım',
      url: '/tutorail',
      icon: 'alert',     
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'alert',
    }
  ];
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService
  ) {
   
    this.initializeApp();
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
