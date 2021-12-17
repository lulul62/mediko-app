import { Component, OnInit } from '@angular/core';
import LoginGuard from 'src/app/guard/login.guard';
import { Customer } from 'src/app/models/Customer';
import CustomerCommand from 'src/app/services/command/customer.command';
import CustomerQuery from 'src/app/services/query/customer.query';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(public guard: LoginGuard, public customerQuery: CustomerQuery, public customerCommand: CustomerCommand) { }

  customerList: Array<Customer> = []

  ngOnInit(): void {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
    this.getAllCustomers();
  }

  async deleteCustomer(customerId: string): Promise<void> {
    try {
      await this.customerCommand.deleteCustomer(customerId);
      this.getAllCustomers();
    }
    catch (operationError) {
      throw new Error(`An error happened during the delete of the medic with id ${customerId}: ${JSON.stringify(operationError)}`)
    }
  }

  public getAllCustomers(): void {
    this.customerQuery.getAllCustomers().subscribe((customers) => {
      this.customerList = customers as Array<Customer>;
    })
  }

}
