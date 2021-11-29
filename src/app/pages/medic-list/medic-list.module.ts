import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicListComponent } from './medic-list.component';
import { MedicListRoutingModule } from './medic-list-routing.module';



@NgModule({
  declarations: [
    MedicListComponent
  ],
  imports: [
    CommonModule,
    MedicListRoutingModule
  ]
})
export class MedicListModule { }
