import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Orders } from '../shared/general';

@Component({
  selector: 'app-my-support',
  templateUrl: './my-support.page.html',
  styleUrls: ['./my-support.page.scss'],
})
export class MySupportPage implements OnInit {
  public location = location;
  currentOrder:Orders;
    constructor(private appService:AppService) {   
      this.currentOrder = {
        userId:5,
        location:"Ankara",
        amount:10,
        createDate:new Date(),
        description:"Açıklama",
        photo:"google.com",
     
      } as Orders;
    this.addOrders(this.currentOrder)
  }

  ngOnInit() {
    
      
  }

  addOrders(order){
 
    this.appService.addOrders(order)
    
  }

}
