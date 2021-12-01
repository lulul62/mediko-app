import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
import { Meeting } from "src/app/models/Meeting";

@Injectable({
    providedIn: 'root',
})

export default class MeetingCommand {
    constructor(private angularFirestore: AngularFirestore) { }

    addNewMeetingToDatabase(newMeeting: Meeting) {
        return this.angularFirestore.collection('meeting').add(JSON.parse(JSON.stringify(newMeeting as Meeting)))
            .then(success => success)
            .catch(httpError => {
                throw new Error(`Cant add meeting ${JSON.stringify(newMeeting)} because of : ${httpError}`)
            })
    }
}