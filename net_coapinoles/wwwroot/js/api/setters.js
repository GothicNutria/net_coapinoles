import callApi from './helper.js'
import Routes from "./routes.js"

export const SendWhatsapp = (ID = 0, tel) =>
    callApi(Routes.reservas.Whatsapp, { id: ID, telefono: tel })