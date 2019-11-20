import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPhotosPage } from './my-photos.page';

const routes: Routes = [
  {
    path: '',
    component: MyPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPhotosPageRoutingModule {}
