import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {AboutComponent} from './about/about.component';
import {ProductPostsResolver} from './product/dataresolver';
import {GalleryComponent} from './product/gallery/gallery.component';
import {SearchComponent} from './product/search/search.component';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './util/loginguard';
import * as photos from './photo.json';
import {CartComponent} from './order/cart/cart.component';
import {RegisterComponent} from './register/register.component';
import {NotificationComponent} from './home/notification/notification.component';
import {SenderComponent} from './home/sender/sender.component';

const routes: Routes = [
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Register', component: RegisterComponent
  },
  {
  path: 'Home',
  component: HomeComponent,
  canActivate: [LoginGuard],
  children: [{
    path: 'Notification',
    component: SenderComponent
  }]

  // outlet: 'home'
},
  {
    path: 'Product',
    component: ProductComponent,
    canActivate: [LoginGuard],
    canActivateChild : [LoginGuard],
    children: [
      {
      path: 'Gallery',
      component: GalleryComponent,
        // static routing data
      data: photos
       /*resolve: {
          products: ProductPostsResolver
        }*//*resolve: {
          products: ProductPostsResolver
        }*/
    },
      {
        path: 'Search',
        component: SearchComponent
      }


    ],
    // outlet: 'product'
  },

  // lazy loading
  {
    path: 'Order',
    canActivate: [LoginGuard],
    canActivateChild : [LoginGuard],
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  /*{
    path: 'About/:id',
    component: AboutComponent,
    // outlet: 'about'
  },*/
  {
    path: 'About',
    component: AboutComponent,
    // outlet: 'about'
  },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
