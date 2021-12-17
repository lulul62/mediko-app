import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})

export default class MeetingNotificationHelper {

    addMeetingNotificationSuccess() {
        return Swal.fire(
            '',
            'Un nouveau rendez vous à été ajouté à la liste des rendez-vous',
            'success'
        )
    }
    deleteNotificationSuccess() {
        return Swal.fire(
            '',
            'Le rendez-vous à été supprimé avec succés',
            'success'
        )
    }
}