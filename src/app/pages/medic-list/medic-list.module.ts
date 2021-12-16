import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicListComponent } from './medic-list.component';
import { MedicListRoutingModule } from './medic-list-routing.module';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    MedicListComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzCardModule,
    FormsModule,
    MedicListRoutingModule,
    NzTableModule
  ]
})
export class MedicListModule { }
