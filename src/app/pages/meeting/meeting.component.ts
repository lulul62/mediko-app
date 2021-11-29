import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/models/Meeting';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  model = new Meeting('', '', new Date(), '', '');

  onSubmit(meetingForm: NgForm) {
    this.afs.collection('meeting').add(JSON.parse(JSON.stringify(this.model)))
    meetingForm.reset()
  }

  ngOnInit() {

  }

}
