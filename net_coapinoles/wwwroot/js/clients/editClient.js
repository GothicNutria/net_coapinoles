import toastAlert from "/js/components/toastAlert.js"
import loadScreenClass from "/js/components/loadScreen.js"
import { getClients } from "/js/api/getters.js"
import { editClient } from "/js/api/setters.js"
import { formateTel, completeUnFormated } from "/js/components/formatTelephone.js"

import initForm from "/js/forms.js"

import "/lib/intl-tel-input/intlTelInput.min.js"

const event = ['form:valid', '.needs-validation']

let iti = null

export default async (modal, id) => {
    const loadScreen = loadScreenClass({
        title: "Aplicando cambios",
        success: "Se editó el cliente",
        error: "No se pudo editar el cliente"
    })
    const client = (await getClients(id))[0] ?? []

    const $tel = $("#modalServices #telIn")
    const $intTel = $("#modalServices #internationalNumberPhone")

    if (iti) {
        iti.destroy();
    }

    iti = window.intlTelInput($tel[0], {
        initialCountry: "mx",
        separateDialCode: true
    });

    $tel.off("input").on("input", function () {
        const val = completeUnFormated($(this).val())
        const countryCode = "+" + iti.getSelectedCountryData().dialCode;
        const internationalTel = countryCode + val
        $intTel.val(internationalTel)
    })

    if (client.Telefono) {
        iti.setNumber(client.Telefono);
        $intTel.val(`+${iti.getSelectedCountryData().dialCode}${$tel.val() }`)
        $tel.val(formateTel($tel.val()))//SUPER AMBIGUO PERO DE OTRA MANERA NOOOOOOOOOO AHHHHHHH
    }

    $("#modalServices #nameIn").val(client.Nombre ?? "")
    $("#modalServices #emailIn").val(client.Correo ?? "")


    $(document).off(...event).on(...event, async function (e) {
        $('#modalServices .btn-submit-edit').prop("disabled", true)
        await loadScreen.show()

        const data = {
            ...client,
            Nombre: $("#modalServices #nameIn").val(),
            Telefono: $intTel.val(),
            Correo: $("#modalServices #emailIn").val()
        }
        try {
            const res = await editClient(data)
            if (res) {
                await loadScreen.setProgress(100)
                modal.hide()
                $(document).trigger('table:reload')
                toastAlert("Se editó el cliente", "Los datos del cliente se editaron exitosamente", 2)
            } else {
                await loadScreen.onError()
                $('#modalServices .btn-submit-edit').prop("disabled", false)
                toastAlert("No se editó el cliente", "No se pudo editar los datos del cliente", 0)
            }
        } catch {
            await loadScreen.onError()
            $('#modalServices .btn-submit-edit').prop("disabled", false)
            toastAlert("Hubo un error", "Hubo un error al modificar el cliente", 0)
        }

        console.log(data)
    })
    initForm()
}