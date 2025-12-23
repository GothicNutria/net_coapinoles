export default {
    Auth: {
        get Login() { return APIURL + "api/Auth/login" }
    },
    catalogos: {
        get HoraPickup() { return APIURL + "api/Catalogos/ObtenerPickupHora" },

        get Precios() { return APIURL + "api/Catalogos/ObtenerPrecios" }
    },
    reservas: {
        get Cancelar() { return APIURL + "api/Reservas/cancelarReservaByID?reservaID=" },
        get Whatsapp() { return APIURL + "api/Reservas/ReenviarWhatsapp/" },
        get Listado() { return APIURL + "api/Reservas/GetReservation" }
    },
    Pagos: {
        get Create() { return APIURL + "api/Pagos/Create" },
        get Cancel() { return APIURL + "api/pagos/cancelPaymentByID" }
    },
    moneda: {
        get Detalles() { return APIURL + "api/Monedas/GetCurrencyDetailsByID?idMoneda=" }
    },
    clients: {
        get GetCustomerByPhone() { return APIURL + "api/Clientes/GetCustomerByPhone" },
        get Listado() { return APIURL + "api/Clientes/ObtenerCliente" },
        get Editar() { return APIURL + "api/Clientes/UpdateCustomer" },
    }
}