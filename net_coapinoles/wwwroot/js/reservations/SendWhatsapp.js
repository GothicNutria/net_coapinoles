import { SendWhatsapp } from "/js/api/setters.js"
import { completeUnFormated } from "/js/components/formatTelephone.js"
import toastAlert from "/js/components/toastAlert.js"

const id = $("#telWhatsapp-reserveID")
const submitBtn = $("#telWhatsappSubmit")
const telIn = $("#telWhatsappIn")

let tel = ""

const iti = window.intlTelInput(telIn[0], {
    initialCountry: "mx",
    separateDialCode: true,
    loadUtils: () => import("/lib/intl-tel-input/utils.js"),
});


telIn.on("input", function () {
    console.log(4)
    const val = completeUnFormated($(this).val())
    const countryCode = "+" + iti.getSelectedCountryData().dialCode;
    tel = countryCode + val
})

$(".needs-validation").on("submit", async function (e) {
    e.preventDefault();
    e.stopPropagation();
    const form = this;

    if (form.checkValidity()) {
        submitBtn.prop("disabled", true)
        const res = await SendWhatsapp(Number(id.val()), tel)

        if (res) {
            toastAlert("Confirmación envíada", `Se envió correctamente la confirmación al ${telIn.val()}`, 2)
        } else {
            toastAlert("Error al envíar", `No se pudo envíar la confirmación`, 0)

        }
        console.log(res)
    }
})