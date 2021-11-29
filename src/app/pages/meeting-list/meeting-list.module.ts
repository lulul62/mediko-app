import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingListComponent } from './meeting-list.component';
import { MeetingListRouterModule } from './meeting-list-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    MeetingListComponent,
  ],
  imports: [
    CommonModule,
    MeetingListRouterModule,
    NzTableModule
  ]
})
export class MeetingListModule { }
