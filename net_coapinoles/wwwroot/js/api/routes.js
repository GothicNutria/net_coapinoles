export default {
    catalogos: {
        get HoraPickup() { return APIURL + "api/Catalogos/ObtenerPickupHora" },

        get Precios() { return APIURL + "api/Catalogos/ObtenerPrecios" }
    },
    reservas: {
        get Whatsapp() { return APIURL + "api/Reservas/ReenviarWhatsapp/" },
        get Listado() { return APIURL + "api/Reservas/GetReservation" }
    },
    moneda: {
        get Detalles() { return APIURL + "api/Monedas/GetCurrencyDetailsByID?idMoneda=" }
    }
};