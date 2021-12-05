import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})


export default class MedicNotificationHelper {
    addMedicNotificationSuccess() {
        return Swal.fire(
            '',
            'Un nouveau medecin vous à été ajouté à la liste des medecins',
            'success'
        )
    }
}