import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meeting } from "src/app/models/Meeting";

@Injectable({
    providedIn: 'root',
})

export default class MeetingQuery {
    constructor(private afs: AngularFirestore) { }

    getMeetingByCustomerName(name: string) {
        this.afs.collection('meeting', ref => ref.where('customer', '==', name))
    }
}