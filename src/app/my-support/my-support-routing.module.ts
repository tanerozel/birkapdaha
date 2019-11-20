import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySupportPage } from './my-support.page';

const routes: Routes = [
  {
    path: '',
    component: MySupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySupportPageRoutingModule {}
