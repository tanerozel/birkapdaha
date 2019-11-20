import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySupportPageRoutingModule } from './my-support-routing.module';

import { MySupportPage } from './my-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySupportPageRoutingModule
  ],
  declarations: [MySupportPage]
})
export class MySupportPageModule {}
