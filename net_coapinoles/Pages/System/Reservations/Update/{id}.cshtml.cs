using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using net_coapinoles.Models;
using net_coapinoles.Models.DTO;
using net_coapinoles.Services;
using net_coapinoles.Services.Models;
using net_coapinoles.Resources.Enums;

namespace net_coapinoles.Pages.System.Reservations
{
    public class UpdateModel : PageModel {
        public async Task<IActionResult> OnPostAsync([FromBody] ReqReservacion data) {
            TempData["Alert.Title"] = "Edición exitosa";
            TempData["Alert.Message"] = $"Se editó correctamente la reservación.\nConfirmación";
            TempData["Alert.Type"] = (int)AlertType.Success;
            TempData["Alert.Time"] = DateTime.Now;


            return new JsonResult(new {
                ok = true,
                redirect = Url.Content("~/System/Reservations/Create")
            });
        }

        public int id { get; set; }
        public Hora[] hours { get; set; }
        public LugarPickup[] pickups { get; set; }
        public FormaPago[] methodOfPay { get; set; }
        public Cliente[] clients { get; set; }
        public async Task OnGet(int id) {
            this.id = id;
            await LoadFormDataAsync();
        }

        private async Task LoadFormDataAsync() {
            hours = await HoursHelper.getHoursBusiness();
            pickups = await GetterApi.GetPickups();
            methodOfPay = await GetterApi.GetMethodsOfPay();
            clients = await GetterApi.GetClients();
        }
    }
}
