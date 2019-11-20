import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPhotosPageRoutingModule } from './my-photos-routing.module';

import { MyPhotosPage } from './my-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPhotosPageRoutingModule
  ],
  declarations: [MyPhotosPage]
})
export class MyPhotosPageModule {}
