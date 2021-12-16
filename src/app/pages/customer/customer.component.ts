import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import LoginGuard from 'src/app/guard/login.guard';
import { Customer } from 'src/app/models/Customer';
import CustomerCommand from 'src/app/services/command/customer.command';
import CustomerNotificationHelper from '../../helpers/notifications/customer.notification';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  newCustomer: Customer = {
    id: '',
    name: '',
    firstname: '',
    age: '',
    location: '',
    gender: '',
    telephone: '',
    email: ''
  }

  constructor(private customerCommand: CustomerCommand, private customerNotificationHelper: CustomerNotificationHelper, public guard: LoginGuard) {
  }

  ngOnInit(): void {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
  }

  addNewCustomer(customerForm: NgForm) {
    try {
      this.customerCommand.addNewCustomerToDatabase(this.newCustomer as Customer)
      this.customerNotificationHelper.addCustomerNotificationSuccess()
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
