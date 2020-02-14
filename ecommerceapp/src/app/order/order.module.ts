import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import {OrderRoutingModule} from './order-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CartComponent } from './cart/cart.component';
import {DataViewModule} from 'primeng/dataview';



@NgModule({
  declarations: [OrderComponent, AddComponent, EditComponent, DeleteComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    DataViewModule


  ]
})
export class OrderModule { }
