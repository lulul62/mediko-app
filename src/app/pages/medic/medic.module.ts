import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicComponent } from './medic.component';
import { MedicRouterModule } from './medic-router.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MedicComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzCardModule,
    FormsModule,
    MedicRouterModule
  ]
})
export class MedicModule { }
