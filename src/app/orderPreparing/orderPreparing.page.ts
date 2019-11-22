import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderp',
  templateUrl: 'orderPreparing.page.html',
  styleUrls: ['orderPreparing.page.scss']
})
export class OrderPreparing implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  
  constructor(public actionSheetController: ActionSheetController, public route: Router) {}

  async openModal(abc) {
    await this.presentActionSheet(abc);
  }

  async presentActionSheet(abc) {
    let buttonSet1 = [{
      text: 'Kedi',
      icon: 'trash',
      handler: () => {
        this.openModal("kedi");
      }
    }, {
      text: 'Köpek',
      icon: 'share',
      handler: () => {
        this.openModal("köpek");
      }
    }];

    let buttonSet2 = [{
      text: 'Dolu',
      icon: 'trash',
      handler: () => {
        this.route.navigateByUrl("/login");
      }
    }, {
      text: 'Dop Dolu',
      icon: 'share',
      handler: () => {
        this.route.navigateByUrl("/login");
      }
    }];
    const actionSheet = await this.actionSheetController.create({
      header: 'Bağış',
      cssClass: 'test',
      buttons: abc == "hayvan" ? buttonSet1 : buttonSet2
    });
    await actionSheet.present();
  }

  ngOnInit() {
    
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
