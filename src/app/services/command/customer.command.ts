import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
import { Customer } from "src/app/models/Customer";

@Injectable({
    providedIn: 'root',
})

export default class CustomerCommand {
    constructor(private angularFirestore: AngularFirestore) { }

    addNewCustomerToDatabase(newCustomer: Customer) {
        return this.angularFirestore.collection('customers').add(JSON.parse(JSON.stringify(newCustomer as Customer)))
            .then(success => success)
            .catch(httpError => {
                throw new Error(`Cant add meeting ${JSON.stringify(newCustomer)} because of : ${httpError}`)
            })
    }

    deleteCustomer(customerId: string) {
        return this.angularFirestore.collection('customers').doc(customerId).delete()
            .then(response => {
                return response
            })
            .catch(operationError => operationError);
    }
}