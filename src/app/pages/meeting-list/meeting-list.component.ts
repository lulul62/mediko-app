import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import LoginGuard from 'src/app/guard/login.guard';
import { Meeting } from 'src/app/models/Meeting';
import MeetingCommand from 'src/app/services/command/meeting.command';
import MeetingQuery from 'src/app/services/query/meeting.query';

@Component({
  selector: 'app-customer',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {


  constructor(public guard: LoginGuard, public meetingQuery: MeetingQuery, public meetingCommand: MeetingCommand) {
  }

  meetingList: Array<Meeting> = [];

  ngOnInit() {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
    this.getAllMeetings();
  }


  async deleteMeeting(meetingId: string): Promise<void> {
    try {
      await this.meetingCommand.deleteMeeting(meetingId);
      this.getAllMeetings();
    }
    catch (operationError) {
      throw new Error(`An error happened during the delete of the medic with id ${meetingId}: ${JSON.stringify(operationError)}`)
    }
  }


  public getAllMeetings() {
    this.meetingQuery.getAllMeetings().subscribe(meetings => {
      this.meetingList = meetings as Array<Meeting>;
      console.log(this.meetingList)
    })
  }
}
