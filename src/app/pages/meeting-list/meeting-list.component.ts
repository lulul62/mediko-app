import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import LoginGuard from 'src/app/guard/login.guard';
import { Meeting } from 'src/app/models/Meeting';
import MeetingQuery from 'src/app/services/query/meeting.query';

@Component({
  selector: 'app-customer',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {


  constructor(public guard: LoginGuard, public meetingQuery: MeetingQuery) {
  }

  meetingList: Array<Meeting> = [];

  ngOnInit() {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
    this.getAllMeetings();
  }


  public getAllMeetings() {
    this.meetingQuery.getAllMeetings().subscribe(meetings => {
      this.meetingList = meetings as Array<Meeting>;
      console.log(this.meetingList)
    })
  }
}
