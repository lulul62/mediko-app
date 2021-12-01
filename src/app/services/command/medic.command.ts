import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';
import { Medic } from "src/app/models/Medic";

@Injectable({
    providedIn: 'root',
})

export default class MeetingCommand {
    constructor(private angularFirestore: AngularFirestore) { }

    addNewMedicToDatabase(newMedic: Medic) {
        return this.angularFirestore.collection('medics').add(JSON.parse(JSON.stringify(newMedic as Medic)))
            .then(success => success)
            .catch(httpError => {
                throw new Error(`Cant add meeting ${JSON.stringify(newMedic)} because of : ${httpError}`)
            })
    }
}