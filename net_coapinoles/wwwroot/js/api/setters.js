import callApi from './helper.js'
import Routes from "./routes.js"

export const SendWhatsapp = (ID = 0, tel) =>
    callApi(Routes.reservas.Whatsapp, { id: ID, telefono: tel })

export const CancelReserve = (id) =>
    callApi(Routes.reservas.Cancelar + id)

export const SendPayment = (data) =>
    callApi(Routes.Pagos.Create, data)
export const CancelPayment = (id) =>
    callApi(Routes.Pagos.Cancel + '?id=' + id)
export const editClient = (data) =>
    callApi(Routes.clients.Editar, data)