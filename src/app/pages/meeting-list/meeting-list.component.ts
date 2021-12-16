import { Component, OnInit } from '@angular/core';
import LoginGuard from 'src/app/guard/login.guard';

@Component({
  selector: 'app-customer',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {


  constructor(public guard: LoginGuard) {

  }

  ngOnInit(): void {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
  }

}
