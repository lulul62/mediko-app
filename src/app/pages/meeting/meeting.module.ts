import { NgModule } from '@angular/core';

import { MeetingRoutingModule } from './meeting-routing.module';

import { MeetingComponent } from './meeting.component';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [MeetingRoutingModule, NzButtonModule, NzCardModule, FormsModule],
  declarations: [MeetingComponent],
  exports: [MeetingComponent],
  providers: [
  ],
})
export class MeetingModule {

}
