using net_coapinoles.Models.DTO;

namespace net_coapinoles.Services {
    public static class SetterApi {

        public static async Task<ResLogin> LoginAsync(ReqLogin data){
            var res = await ApiHelper.CallApiAsync<ResLogin>(ApiRoutes.Auth.Login, data);
            return res;
        }

        public static async Task<ResReservacion> CreateReserva(ReqReservacion data) =>
            await ApiHelper.CallApiAsync<ResReservacion>(ApiRoutes.Reservas.Agregar, data);

    }
}
