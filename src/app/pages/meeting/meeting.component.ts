import { Component } from '@angular/core';
import { Meeting } from 'src/app/models/Meeting';
import { NgForm } from '@angular/forms';
import MeetingCommand from 'src/app/services/command/meeting.command';
import MeetingNotificationHelper from 'src/app/helpers/notifications/meeting.notification';

@Component({
  selector: 'app-welcome',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent {

  constructor(private meetingCommand: MeetingCommand, private meetingNotificationHelper: MeetingNotificationHelper) { }

  meeting: Meeting = {
    customer: '',
    email: '',
    date: new Date(),
    reason: '',
    phoneNumber: ''
  };

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
