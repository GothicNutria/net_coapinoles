
const myModal = new coreui.Modal("#modalServices", {
    keyboard: false
})

$(document).on("click", ".sendToWhatsapp", function () {
    const $this = $(this)
    const rowId = $this.data("id")

    fetch(`/Shared/Components/Modals/Send-whatsapp?id=${rowId}`)
        .then(res => res.text())
        .then(res => {
            const html = $(res)
            $("#modal-content").html(html)

            myModal.show()
        })
    
});
