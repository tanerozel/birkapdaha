import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Orders } from '../shared/general';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-support',
  templateUrl: './my-support.page.html',
  styleUrls: ['./my-support.page.scss'],
})
export class MySupportPage implements OnInit {
  public location = location;
  currentOrder;
  public orderList: Orders[]
  constructor(private appService: AppService,private authService:AuthService) {
    console.log(authService.userData.uid);
    this.currentOrder = {
      userId: authService.userData.uid,
      location: "Ankara",
      amount: 10,
      createDate: new Date(),
      description: "Açıklama",
      photo: "google.com",
      status: "wsss",

    } as Orders;
    // this.addOrders(this.currentOrder)
    this.appService.getUserOrders("5").subscribe((result) => {
      this.orderList = result;
      console.log(this.orderList)
    })

  }

  ngOnInit() {


  }

  addOrders(order) {

    this.appService.addOrders(order)

  }

}
