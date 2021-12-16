import { Component } from '@angular/core';
import { Meeting } from 'src/app/models/Meeting';
import { NgForm } from '@angular/forms';
import MeetingCommand from 'src/app/services/command/meeting.command';
import MeetingNotificationHelper from 'src/app/helpers/notifications/meeting.notification';
import { AuthService } from '@auth0/auth0-angular';
import LoginGuard from 'src/app/guard/login.guard';
import AuthenticationQuery from 'src/app/services/query/authentication.query';


@Component({
  selector: 'app-welcome',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent {

  constructor(private meetingCommand: MeetingCommand, private meetingNotificationHelper: MeetingNotificationHelper, public auth: AuthService, public guard: LoginGuard, public authentication: AuthenticationQuery) { }

  meeting: Meeting = {
    id: '',
    customer: '',
    email: '',
    date: new Date(),
    reason: '',
    phoneNumber: ''
  };

  ngOnInit(): void {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
  }

  addNewMeeting(meetingForm: NgForm) {
    try {
      this.meetingCommand.addNewMeetingToDatabase(this.meeting as Meeting)
      this.meetingNotificationHelper.addMeetingNotificationSuccess();
      this.cleanMeetingForm(meetingForm);
    }
    catch (error) {
      return error
    }
  }

  cleanMeetingForm(meetingForm: NgForm): void {
    return meetingForm.reset()
  }
}
