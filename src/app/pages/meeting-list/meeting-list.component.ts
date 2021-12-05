import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/models/Meeting';
import { Store } from '@ngxs/store';
import { GetAllMeetings } from './meeting-list.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  customerList: Array<Meeting> = [];

  meetingList$: Observable<Array<Meeting>>

  constructor(private store: Store) {
    this.meetingList$ = this.store.select(state => state.meetingList)
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllMeetings());
    console.log(this.meetingList$)
  }

}
