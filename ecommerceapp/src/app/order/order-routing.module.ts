import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {
    path: 'Add',
    component: AddComponent
  },
  {
    path: 'Edit',
    component: EditComponent
  },
  {
    path: 'Delete',
    component: DeleteComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
