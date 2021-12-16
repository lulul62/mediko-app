import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { CustomerListRoutingModule } from './customer-list-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';



@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerListRoutingModule,
    NzTableModule
  ]
})
export class CustomerListModule { }
