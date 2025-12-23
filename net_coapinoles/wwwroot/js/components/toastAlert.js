import AlertType from "./AlertTypes.js";

export default (Title, Message, Type) => {
    const type = AlertType[Type];

    fetch(`/Shared/Components/ToastAlertJS?type=${encodeURIComponent(type)}&title=${encodeURIComponent(Title)}&message=${encodeURIComponent(Message)}`)
        .then(r => r.text())
        .then(r => {
            const html = $(r)
            html.removeClass("show")
            $(".toast-container").append(html)
            const toast = new coreui.Toast(html[0], {
                autohide: true,
                delay: 5000
            })

            html.on('hidden.coreui.toast', () => {
                setTimeout(() => html.remove(), 1000)
            })

            toast.show()
        })
        .catch(console.error)

};
