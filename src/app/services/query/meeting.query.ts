import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export default class MeetingQuery {
    constructor(private afs: AngularFirestore) { }

    getAllMeetings() {
        return this.afs.collectionGroup('meeting').valueChanges()
    }
}