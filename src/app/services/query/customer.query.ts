import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export default class CustomerQuery {
    constructor(private afs: AngularFirestore) { }

    getAllCustomers() {
        return this.afs.collectionGroup('customers').valueChanges()
    }
}