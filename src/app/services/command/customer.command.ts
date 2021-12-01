import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
import { Customer } from "src/app/models/Customer";

@Injectable({
    providedIn: 'root',
})

export default class CustomerCommand {
    constructor(private angularFirestore: AngularFirestore) { }

    addNewMedicToDatabase(newCustomer: Customer) {
        return this.angularFirestore.collection('medics').add(JSON.parse(JSON.stringify(newCustomer as Customer)))
            .then(success => success)
            .catch(httpError => {
                throw new Error(`Cant add meeting ${JSON.stringify(newCustomer)} because of : ${httpError}`)
            })
    }
}