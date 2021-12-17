import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root',
})

export default class CustomerNotificationHelper {
    addCustomerNotificationSuccess() {
        return Swal.fire(
            '',
            'Un nouveau patient à été ajouté à la liste des clients',
            'success'
        )
    }
    deleteNotificationSuccess() {
        return Swal.fire(
            '',
            'Le patient à été supprimé avec succés',
            'success'
        )
    }
}