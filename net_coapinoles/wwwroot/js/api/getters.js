import callApi from './helper.js'
import Routes from "./routes.js"

export const getReservations = (id = 0) => callApi(Routes.reservas.Listado, { id: id });
export const getHoursPickup = (data) => callApi(Routes.catalogos.HoraPickup, data)
export const getCosts = (fecha) => callApi(Routes.catalogos.Precios + "?dia=" + fecha.toString())
export const getCurrency = (id) => callApi(Routes.moneda.Detalles + id, null, "GET")
export const getClients = (clienteId = 0) => callApi(Routes.clients.Listado + `?clienteId=${clienteId}`)