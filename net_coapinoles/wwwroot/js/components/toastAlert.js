import AlertType from "./AlertTypes.js";

export default (Title, Message, Type) => {
    const Tag = {
        [AlertType.Error]: "danger",
        [AlertType.Warn]: "warning",
        [AlertType.Success]: "success"
    }[Type];
    const Icon = {
        [AlertType.Error]: "bi-exclamation-triangle-fill",
        [AlertType.Warn]: "bi-exclamation-triangle",
        [AlertType.Success]: "bi-check-circle-fill"
    }[Type];

    return `
        <div class="toast position-absolute end-0 bottom-0 translate-middle-y me-5 border-${Tag} show" id="toast-alert" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <i class="bi ${Icon} text-${Tag} me-2"></i>

                <strong class="me-auto">${Title}</strong>
                <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${Message}
            </div>
        </div>
    `
}
