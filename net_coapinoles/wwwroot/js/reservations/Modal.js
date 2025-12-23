import initWhatsapp from "/js/reservations/SendWhatsapp.js"
import initRemoveReserve from "/js/reservations/removeReserve.js"
import initPayments from "/js/reservations/payments.js"
import initAddPayments from "/js/reservations/addPayment.js"

const $document = $(document)

const myModal = new coreui.Modal("#modalServices", {
    keyboard: false
})

function getComponent(widget, url, method) {
    const $this = $(widget)
    const rowId = $this.data("id")

    fetch(url + `?id=${rowId}`)
        .then(res => res.text())
        .then(html => {
            $("#modalServices").html(html)
            method(myModal, rowId)
            myModal.show()
        })
}

$document.on("click", ".sendToWhatsappBtn", function () {
    getComponent(this, `/Shared/Components/Modals/Reservations/Send-whatsapp`, initWhatsapp)
});

$document.on("click", ".cancelReserveBtn", function () {
    getComponent(this, `/Shared/Components/Modals/Reservations/RemoveReservation`, initRemoveReserve)
})

$document.on("click", ".paymentsBtn", function () {
    getComponent(this, `/Shared/Components/Modals/Reservations/Payments`, initPayments)
})

$document.on("click", ".addPaymentBtn", function () {
    getComponent(this, `/Shared/Components/Modals/Reservations/AddPayment`, initAddPayments)
})