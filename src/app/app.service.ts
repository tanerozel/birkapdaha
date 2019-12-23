import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Orders } from './shared/general';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone  ) {    
   }

   addOrders(orders:Orders){
    return this.afs.collection('orders').add(orders);
   }

   getUserOrders(userId:string){  
    return this.afs.collection<Orders>('orders', ref => ref.where('userId', '==', userId)).valueChanges();
   }


}
