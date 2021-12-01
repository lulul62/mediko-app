import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medic } from 'src/app/models/Medic';
import MedicCommand from 'src/app/services/command/medic.command';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class MedicComponent {

  newMedic: Medic = {
    name: '',
    firstame: '',
    ocation: '',
    specializaton: ''
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
