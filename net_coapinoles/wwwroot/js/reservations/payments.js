
import toastAlert from "/js/components/toastAlert.js"
import loadScreenClass from "/js/components/loadScreen.js"
import { CancelPayment } from "/js/api/setters.js"

const event = ["click.changeStatusPayment", '#modalServices .status-pay-btn']
const eventSubmit = ['click.submitChangeStatusPayment', '#modalServices .btn-submit-payments']

export default (modal, id) => {
    const loadScreen = loadScreenClass({
        title: "Cancelando pago",
        success: "Se canceló el pago",
        error: "No se pudo cancelar el pago"
    })
    const data = {}

    $(document).off(...event).on(...event, function (e) {
        $(eventSubmit[1]).prop("disabled", false)
        const $this = $(this)

        const payID = Number($this.data("id"))
        const vigent = Boolean($this.data("vigent"))
        data[payID] = !vigent
        $this.data("vigent", data[payID])

        if (vigent) $this.removeClass("btn-success").addClass("btn-danger").text("Cancelado")
        else $this.removeClass("btn-danger").addClass("btn-success").text("Pagado")
    })

    $(document).off(...eventSubmit).on(...eventSubmit, async function (e) {
        $(eventSubmit[1]).prop("disabled", true)
        await loadScreen.show()

        const canceledIDs = Object.keys(data).filter(id => !data[id])
        console.log(canceledIDs)

        let index = 0
        const totalItems = canceledIDs.length

        for (const cancelID of canceledIDs) {
            const res = await CancelPayment(Number(cancelID))
            if (res.Status !== 200) break

            index++
            await loadScreen.setProgress((index / totalItems) * 100)
        }


        if (totalItems == index) {
            modal.hide()
            toastAlert("Pagos cancelados", `Los pagos se cancelaron correctamete (${totalItems}/${index})`, 2)
        } else {
            await loadScreen.onError()
            modal.hide()
            toastAlert("Pagos cancelados", `Los pagos se cancelaron correctamete (${totalItems}/${index})`, 2)
        }
    })
}