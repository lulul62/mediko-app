import { Component, OnInit } from '@angular/core';
import LoginGuard from 'src/app/guard/login.guard';

@Component({
  selector: 'app-medic-list',
  templateUrl: './medic-list.component.html',
  styleUrls: ['./medic-list.component.scss']
})
export class MedicListComponent implements OnInit {

  constructor(public guard: LoginGuard) { }

  ngOnInit(): void {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
  }

}
