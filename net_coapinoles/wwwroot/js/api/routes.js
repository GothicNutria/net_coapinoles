export default {
    catalogos: {
        get HoraPickup() { return APIURL + "api/Catalogos/ObtenerPickupHora" },

        get Precios() { return APIURL + "api/Catalogos/ObtenerPrecios" }
    },
    reservas: {
        get Listado() { return APIURL + "api/Reservas/GetReservation" }
    },
    moneda: {
        get Detalles() { return APIURL + "api/Monedas/GetCurrencyDetailsByID?idMoneda=" }
    }
};