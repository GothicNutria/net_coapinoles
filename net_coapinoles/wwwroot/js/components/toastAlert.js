import AlertType from "./AlertTypes.js";

export default (Title, Message, Type) => {
    const type = AlertType[Type]
    fetch(`/Shared/Components/ToastAlertJS?type=${encodeURIComponent(type)}&title=${encodeURIComponent(Title)}&message=${encodeURIComponent(Message)}`)
        .then(res => res.text())
        .then(html => {
            console.log(html)
            $(".toast-container").append(html);
        })
        .catch(console.error);
}
