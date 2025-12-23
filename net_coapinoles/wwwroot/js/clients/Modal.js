import initEditClient from "/js/clients/editClient.js"

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

$document.on("click", '.edit-client-btn', function () {
    getComponent(this, `/Shared/Components/Modals/Clients/EditClients`, initEditClient)
});