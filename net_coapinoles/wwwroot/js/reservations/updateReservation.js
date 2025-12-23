import { getHoursPickup, getCosts, getReservations } from "../api/getters.js";
import calcPrice from "../calcPrice.js";
import currencys from "/js/currencys.js";
import toastAlert from "/js/components/toastAlert.js"
import { formateTel, completeUnFormated } from "/js/components/formatTelephone.js"
import loadScreenClass from "/js/components/loadScreen.js"
import to12hour from "/js/components/to12hour.js"

import initForm from "/js/forms.js"

$(async () => {
    //id de la reserva cargado desde el back en la pagina cshtml
    const prevReserve = (await getReservations(id))[0]
    //Pantalla de carga 
    const loadScreen = loadScreenClass({
        title: "Editando reservación ",
        success: "Se editó exitosamente la reservación: ",
        error: "Error al editar la reservación."
    })

    $(".breadcrumb-page").text(prevReserve.Confirmacion)
})