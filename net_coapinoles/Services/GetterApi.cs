using net_coapinoles.Models.DTO;
using System.Collections;

namespace net_coapinoles.Services {
    public class GetterApi {
        public static async Task<ResReservacion[]> GetReservations(int id = 0)=>
            await ApiHelper.CallApiAsync<ResReservacion[]>(
                ApiRoutes.Reservas.Listado, new {id}
            );
        public static async Task<Cliente[]> GetClients() =>
            await ApiHelper.CallApiAsync<Cliente[]>(
                ApiRoutes.Clientes.Listado
            );
        public static async Task<Hora[]> GetHours() =>
            await ApiHelper.CallApiAsync<Hora[]>(
                ApiRoutes.Catalogos.Horas, new { Descripcion = "" }
            );
        public static async Task<LugarPickup[]> GetPickups() =>
            (await ApiHelper.CallApiAsync<LugarPickup[]>(
                ApiRoutes.Catalogos.Pickup, new { Descripcion = "" }
            )).Where(f => f.ID <= 2).ToArray();
        public static async Task<FormaPago[]> GetMethodsOfPay() =>
            await ApiHelper.CallApiAsync<FormaPago[]>(ApiRoutes.Catalogos.FPago);
    }
}
