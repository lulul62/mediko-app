import Swal from 'sweetalert2'

export default class CustomerNotificationHelper {
    addCustomerNotificationSuccess() {
        return Swal.fire(
            '',
            'Un nouveau rendez vous à été ajouté à la liste des rendez-vous',
            'success'
        )
    }
}