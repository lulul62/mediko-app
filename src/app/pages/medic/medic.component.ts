import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medic } from 'src/app/models/Medic';
import MedicCommand from 'src/app/services/command/medic.command';

@Component({
  selector: 'app-customer',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.scss']
})
export class MedicComponent {

  newMedic: Medic = {
    name: '',
    firstname: '',
    location: '',
    specialization: ''
  }

  constructor(private medicCommand: MedicCommand) {
  }

  addNewMedic(medicForm: NgForm) {
    try {
      this.medicCommand.addNewMedicToDatabase(this.newMedic as Medic)
      return this.cleanMedicForm(medicForm)
    }
    catch (error) {
      return error
    }
  }

  cleanMedicForm(medicForm: NgForm): void {
    return medicForm.reset()
  }

}
