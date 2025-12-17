namespace net_coapinoles {
    public static class ApiRoutes {
        public static string _apiUrl;
        public static string APIURL => _apiUrl;
        public static class Auth {
            public static string Login => APIURL + "api/Auth/login";
        }

        public static class Brazaletes {
            public static string Iniciales => APIURL + "api/Brazaletes/RegistrarBrazaletesIniciales";
            public static string Finales => APIURL + "api/Brazaletes/RegistrarBrazaletesFinales";
        }

        public static class Clientes {
            public static string GetCustomerByPhone => APIURL + "api/Clientes/GetCustomerByPhone";
            public static string Listado => APIURL + "api/Clientes/ObtenerCliente";
            public static string Editar => APIURL + "api/Clientes/UpdateCustomer";
        }

        public static class Catalogos {
            public static string Horas => APIURL + "api/Catalogos/ObtenerHoras";
            public static string Pickup => APIURL + "api/Catalogos/ObtenerPickup";
            public static string HoraPickup => APIURL + "api/Catalogos/ObtenerPickupHora";
            public static string Precios => APIURL + "api/Catalogos/ObtenerPrecios";
            public static string FPago => APIURL + "api/Catalogos/ObtenerFormasPago";
        }

        public static class Configuraciones {
            public static string ObtenerPrecios => APIURL + "api/Configuraciones/ObtenerPrecios";
            public static string AgregarPrecio => APIURL + "api/Configuraciones/AddPrecio";
            public static string EditarPrecio => APIURL + "api/Configuraciones/EditPrecio";
            public static string BorrarPrecio => APIURL + "api/Configuraciones/BorrarPrecio/";
        }

        public static class Reservas {
            public static string Agregar => APIURL + "api/Reservas/AddReservation";
            public static string Directa => APIURL + "api/Reservas/AddReservationDirecta";
            public static string Listado => APIURL + "api/Reservas/GetReservation";
            public static string Whatsapp => APIURL + "api/Reservas/ReenviarWhatsapp/";
            public static string Editar => APIURL + "api/Reservas/Actualizar";
            public static string Cancelar => APIURL + "api/Reservas/cancelarReservaByID?reservaID=";
            public static string AddPasajeros => APIURL + "api/Reservas/AddPasajeros";
        }

        public static class Reportes {
            public static string CorteCaja => APIURL + "api/Reportes/CorteCaja";
            public static string Ventas => APIURL + "api/Reportes/Ventas";
            public static string Reservas => APIURL + "api/Reportes/Reservas";
        }

        public static class Pagos {
            public static string Create => APIURL + "api/Pagos/Create";
            public static string Cancelar => APIURL + "api/pagos/cancelPaymentByID";
        }

        public static class Moneda {
            public static string Detalles => APIURL + "api/Monedas/GetCurrencyDetailsByID?idMoneda=";
            public static string AddDetalle => APIURL + "api/Monedas/AddCurrencyValue";
        }

        public static class Usuarios {
            public static string Crear => APIURL + "api/Usuarios/createUser";
            public static string Listado => APIURL + "api/Usuarios/getAllUsers";
            public static string Borrar => APIURL + "api/Usuarios/deleteUser";
        }

        public static class Gastos {
            public static string Crear => APIURL + "api/Gastos/CreateExpense";
            public static string Editar => APIURL + "api/Gastos/UpadateExpense";
            public static string Borrar => APIURL + "api/Gastos/RemoveExpense";
            public static string Listado => APIURL + "api/Gastos/GetExpensesByDate";
        }
    }
}
