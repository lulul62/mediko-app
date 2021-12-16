import { Component, OnInit } from '@angular/core';
import LoginGuard from 'src/app/guard/login.guard';
import MeetingQuery from 'src/app/services/query/meeting.query';

@Component({
  selector: 'app-customer',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {


  constructor(public guard: LoginGuard, public meetingQuery: MeetingQuery) {

  }

  ngOnInit(): void {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
    this.meetingQuery.getAllMeetings();
  }

}
