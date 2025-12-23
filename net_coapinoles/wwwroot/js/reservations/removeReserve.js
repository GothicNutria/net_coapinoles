
import toastAlert from "/js/components/toastAlert.js"
import loadScreenClass from "/js/components/loadScreen.js"
import { CancelReserve } from "/js/api/setters.js"

const event = ["click.cancelReserve", '#modalServices .btn-submit-remove']

export default (modal, id) => {
    const loadScreen = loadScreenClass({
        title: "Cancelando reservación",
        success: "Se canceló la reservación",
        error: "No se pudo cancelar la reservación"
    })

    $(document).off(...event).on(...event, async function (e) {
        $(event[1]).prop("disabled", true)

        await loadScreen.show()
        const res = await CancelReserve(id)
        if (res.exitoso) {
            await loadScreen.setProgress(100)
            modal.hide()
            $(document).trigger('table:reload')
            toastAlert("Reservación cancelada", `Se canceló exitosamente la reservación`, 2)
        } else {
            await loadScreen.onError()
            toastAlert("Error al cancelar", `No se pudo cancelar la reservación`, 0)

        }
    })
}