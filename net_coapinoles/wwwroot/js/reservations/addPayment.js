import toastAlert from "/js/components/toastAlert.js"
import loadScreenClass from "/js/components/loadScreen.js"
import { SendPayment } from "/js/api/setters.js"
import "/lib/MCDatepicker-master/dist/mc-calendar.min.js"

import initForm from "/js/forms.js"

const event = ['form:valid', '.needs-validation']

export default (modal, id) => {
    const loadScreen = loadScreenClass({
        title: "Añadiendo pago",
        success: "Se añadió el pago",
        error: "No se pudo añadir el pago"
    })
    const picker = MCDatepicker.create({
        el: '#datepaymentPicker',
        selectedDate: new Date(),
        dateFormat: "YYYY-MM-DD",
        customClearBTN: "Limpiar",
        customOkBTN: "Aceptar",
        customCancelBTN: "Cancelar",
        customWeekDays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        customMonths: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    });

    $("#datepaymentPicker").val(picker.getFormatedDate())

    $(document).off(...event).on(...event, async function (e) {
        $('#modalServices .btn-submit-add-pay').prop("disabled", true)
        await loadScreen.show()

        const data = {
            Total: $("#totalIn").val() ?? 0,
            AplicaComision: false,
            FormaId: Number($("#method_paymentIn").val()),
            MonedaId: Number($("#method_paymentIn").val()) == 2 ? 2 : 1,
            Referencia: $("#referIn").val() || 'N/A',
            ReservaId: id ?? 0,
            FechaPago: picker.getFormatedDate(),
            Notas: $("#notesIn").val()
        }
        console.log(data)
        if (data.Total <= 0) {
            await loadScreen.onError()
            toastAlert("No se puede añadir el pago", "El monto debe de ser positivo", 0)
            $('#modalServices button[type="submit"]').prop("disabled", false)
        } else {
            const res = await SendPayment(data)
            if (res.Status == 201) {
                await loadScreen.setProgress(100)
                modal.hide()
                $(document).trigger('table:reload')
                toastAlert("Se añadió el pago", "El pago se añadió exitosamente", 2)
            } else {
                await loadScreen.onError()
                toastAlert("Error al añadir el pago", "No se pudo añadir el pago", 0)
                $('#modalServices button[type="submit"]').prop("disabled", false)
            }
        }
    })
    initForm()
}