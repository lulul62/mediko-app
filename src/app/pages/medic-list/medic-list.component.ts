import { Component, OnInit } from '@angular/core';
import LoginGuard from 'src/app/guard/login.guard';
import { Medic } from 'src/app/models/Medic';
import MedicQuery from 'src/app/services/query/medic.query';

@Component({
  selector: 'app-medic-list',
  templateUrl: './medic-list.component.html',
  styleUrls: ['./medic-list.component.scss']
})
export class MedicListComponent implements OnInit {

  constructor(public guard: LoginGuard, public medicQuery: MedicQuery) { }

  medicList: Array<Medic> = [];

  ngOnInit() {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin();
    })
    this.getAllMedics();
    console.log(this.medicList)
  }

  public getAllMedics() {
    this.medicQuery.getAllMedics().subscribe(medics => {
      this.medicList = medics as Array<Medic>;
    })
  }

}
