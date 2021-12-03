import Swal from 'sweetalert2';

export default class MedicNotificationHelper {
    addMedicNotificationSuccess() {
        return Swal.fire(
            '',
            'Un nouveau medecin vous à été ajouté à la liste des medecins',
            'success'
        )
    }
}