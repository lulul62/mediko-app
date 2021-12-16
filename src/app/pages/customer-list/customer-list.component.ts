import { Component, OnInit } from '@angular/core';
import LoginGuard from 'src/app/guard/login.guard';
import CustomerQuery from 'src/app/services/query/customer.query';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(public guard: LoginGuard, customerQuery: CustomerQuery) { }

  ngOnInit(): void {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ?? this.guard.redirectToLogin()
    })
  }

}
