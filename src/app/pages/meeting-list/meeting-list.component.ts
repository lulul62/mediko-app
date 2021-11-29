import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Meeting } from 'src/app/models/Meeting';


@Component({
  selector: 'app-customer',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  customerList: Array<Meeting> = [];

  constructor(private afs: AngularFirestore) {
  }

  deleteMeeting(meeting: Meeting) {
    console.log(meeting)
  }


  getAllMeetings() {
    return this.afs.collection('meeting').valueChanges().subscribe((meetings: any) => {
      this.customerList = meetings
    })
  }

  ngOnInit(): void {
    this.getAllMeetings()
  }

}
