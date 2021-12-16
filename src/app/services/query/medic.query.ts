import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export default class MedicQuery {
    constructor(private afs: AngularFirestore) { }

    getAllMeetings() {
        this.afs.collectionGroup('medics').valueChanges()
    }
}