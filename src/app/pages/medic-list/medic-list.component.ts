import { Component, OnInit } from '@angular/core';
import LoginGuard from 'src/app/guard/login.guard';
import MedicNotificationHelper from 'src/app/helpers/notifications/medic.notification';
import { Medic } from 'src/app/models/Medic';
import MedicCommand from 'src/app/services/command/medic.command';
import MedicQuery from 'src/app/services/query/medic.query';

@Component({
  selector: 'app-medic-list',
  templateUrl: './medic-list.component.html',
  styleUrls: ['./medic-list.component.scss']
})
export class MedicListComponent implements OnInit {

  constructor(public guard: LoginGuard, public medicQuery: MedicQuery, public medicCommand: MedicCommand, public medicNotification: MedicNotificationHelper) { }

  medicList: Array<Medic> = [];

  ngOnInit() {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin();
    })
    this.getAllMedics();
  }

  async deleteMedic(medicId: string): Promise<void> {
    try {
      await this.medicCommand.deleteMedic(medicId);
      this.medicNotification.deleteNotificationSuccess();
      this.getAllMedics();
    }
    catch (operationError) {
      throw new Error(`An error happened during the delete of the medic with id ${medicId}: ${JSON.stringify(operationError)}`)
    }

  }

  public getAllMedics(): void {
    this.medicQuery.getAllMedics().subscribe(medics => {
      this.medicList = medics as Array<Medic>;
    })
  }

}
