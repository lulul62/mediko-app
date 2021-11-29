import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicComponent } from './medic.component';
import { MedicRouterModule } from './medic-router.module';




@NgModule({
  declarations: [
    MedicComponent
  ],
  imports: [
    CommonModule,
    MedicRouterModule
  ]
})
export class MedicModule { }
