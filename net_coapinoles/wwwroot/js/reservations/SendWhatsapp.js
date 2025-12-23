import { SendWhatsapp } from "/js/api/setters.js"
import { completeUnFormated } from "/js/components/formatTelephone.js"
import toastAlert from "/js/components/toastAlert.js"

import loadScreenClass from "/js/components/loadScreen.js"

import "/lib/intl-tel-input/intlTelInput.min.js"
import initForm from "/js/forms.js"

let iti = null

const event = ['form:valid', '.needs-validation']

export default (modal, id) => {
    const telIn = $("#telWhatsappIn")

    let tel = ""

    if (iti) {
        iti.destroy();
    }

    iti = window.intlTelInput(telIn[0], {
        initialCountry: "mx",
        separateDialCode: true,
        loadUtils: () => import("/lib/intl-tel-input/utils.js"),
    });


    telIn.on("input", function () {
        const val = completeUnFormated($(this).val())
        const countryCode = "+" + iti.getSelectedCountryData().dialCode;
        tel = countryCode + val
    })

    const loadScreen = loadScreenClass({
        title: "Enviando confirmación",
        success: "Se envío la confirmación",
        error: "Error al envíar la confirmación"
    })

    $(document).off(...event).on(...event, async function (e) {
        $('#modalServices .btn-submit-whats').prop("disabled", true)

        await loadScreen.show()
        const res = await SendWhatsapp(id, tel)
        if (res) {
            await loadScreen.setProgress(100)
            modal.hide()
            toastAlert("Confirmación envíada", `Se envió correctamente la confirmación al ${telIn.val()}`, 2)
        } else {
            await loadScreen.onError()
            toastAlert("Error al envíar", `No se pudo envíar la confirmación`, 0)
        }
    })

    initForm()
}
