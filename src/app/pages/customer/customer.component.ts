import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer('', '', '', '', '', '', '')
  customers$: any;
  constructor(firestore: Firestore, private afs: AngularFirestore) {

    const customerCollection = collection(firestore, 'customers');
    this.customers$ = collectionData(customerCollection)
  }

  onSubmit(form: NgForm) {
    this.addNewCustomer()

  }

  addNewCustomer() {
    this.afs.collection('customers').add(JSON.parse(JSON.stringify(this.customer)))
  }

  ngOnInit(): void {

  }

}
