using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using net_coapinoles.Models;
using net_coapinoles.Models.DTO;
using net_coapinoles.Services;
using net_coapinoles.Services.Models;
using net_coapinoles.Resources.Enums;

namespace net_coapinoles.Pages.System.Reservations
{
    public class CreateModel : PageModel {
        public async Task<IActionResult> OnPostAsync([FromBody] ReqReservacion data) {
            if ((data.Ad + data.Insen + data.Mn) <= 0) {
                return new JsonResult(new {
                    ok = false,
                    body = new alertVM(
                        "No es posible crear la reserva",
                        "No se puede crear una reserva sin pasajeros.",
                        AlertType.Error
                    )
                });
            }
            if (data.Mn > 0 && (data.Ad + data.Insen) <= 0) {
                return new JsonResult(new {
                    ok = false,
                    body = new alertVM(
                        "No es posible crear la reserva",
                        "No se puede crear una reserva en la que solo viajen menores.",
                        AlertType.Error
                    )
                });
            }
            ResReservacion res = await SetterApi.CreateReserva(data);
            if (!res.exitoso) {
                return new JsonResult(new {
                    ok = false,
                    body = new alertVM(
                        "No es posible crear la reserva",
                        res.mensaje,
                        AlertType.Error
                    )
                });
            }
            TempData["Alert.Title"] = "Reserva exitosa";
            TempData["Alert.Message"] = $"Se realizó correctamente la reservación.\nConfirmación {res.confirmacion}";
            TempData["Alert.Type"] = (int)AlertType.Success;
            TempData["Alert.Time"] = DateTime.Now;


            return new JsonResult(new {
                ok = true,
                redirect = Url.Content("~/System/Reservations/Create")
            });
        }


        public Hora[] hours { get; set; }
        public LugarPickup[] pickups { get; set; }
        public FormaPago[] methodOfPay { get; set; }
        public Cliente[] clients { get; set; }
        public Task OnGet() => LoadFormDataAsync();

        private async Task LoadFormDataAsync() {
            hours = await HoursHelper.getHoursBusiness();
            pickups = await GetterApi.GetPickups();
            methodOfPay = await GetterApi.GetMethodsOfPay();
            clients = await GetterApi.GetClients();
        }

    }
}
