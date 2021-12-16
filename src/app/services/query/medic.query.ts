import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
import { Medic } from "src/app/models/Medic";

@Injectable({
    providedIn: 'root',
})

export default class MedicQuery {
    constructor(private afs: AngularFirestore) { }

    getAllMedics() {
        return this.afs.collectionGroup('medics').valueChanges({ idField: 'id' });
    }
}