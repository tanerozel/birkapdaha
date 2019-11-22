import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem("isCompletTutorial") ?'order-preparing' : 'tutorail',
   // redirectTo: 'tutorail',
    pathMatch: 'full'
  },
  {
    path: 'order-preparing',
    loadChildren: () => import('./orderPreparing/orderPreparing.module').then(m => m.OrderPreparingModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'tutorail',
    loadChildren: () => import('./tutorail/tutorail.module').then( m => m.TutorailPageModule)
  },
  {
    path: 'my-support',
    loadChildren: () => import('./my-support/my-support.module').then( m => m.MySupportPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'my-photos',
    loadChildren: () => import('./my-photos/my-photos.module').then( m => m.MyPhotosPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
