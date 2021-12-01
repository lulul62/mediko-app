import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';
import CustomerCommand from 'src/app/services/command/customer.command';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  newCustomer: Customer = {
    name: '',
    firstname: '',
    age: '',
    location: '',
    gender: '',
    telephone: '',
    email: ''
  }

  constructor(private customerCommand: CustomerCommand) {
  }

  addNewCustomer(customerForm: NgForm) {
    try {
      this.customerCommand.addNewCustomerToDatabase(this.newCustomer as Customer)
      return this.cleanCustomerForm(customerForm)
    }
    catch (error) {
      return error
    }
  }

  cleanCustomerForm(meetingForm: NgForm): void {
    return meetingForm.reset()
  }

}
