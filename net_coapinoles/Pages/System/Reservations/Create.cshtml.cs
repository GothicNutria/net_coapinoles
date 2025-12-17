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
        //public class CostType {
        //    public decimal adulto { get; set; }
        //    public decimal menor { get; set; }
        //    public string moneda { get; set; }
        //}
        ////Datos de la reserva
        //[BindProperty] public string date_reserve { get; set; }
        //[BindProperty] public string hour_reserve { get; set; }
        //[BindProperty] public string type_reserve { get; set; }
        ////Transporte
        //[BindProperty] public bool transport { get; set; }
        //[BindProperty] public string zone_pickup { get; set; }
        //[BindProperty] public string hour_pickup { get; set; }
        //// Datos personales
        //[BindProperty] public string client_name { get; set; }
        //[BindProperty] public string number_phone { get; set; }
        ////Número de personas
        //[BindProperty] public int adults_count { get; set; }
        //[BindProperty] public int child_count { get; set; }
        //[BindProperty] public int elderly_count { get; set; }
        ////Forma de pago
        ////[BindProperty] public int method_pay_id { get; set; }
        ////[BindProperty] public Dictionary<string, decimal> prices { get; set; }
        ////[BindProperty] public Dictionary<string, CostType> costs { get; set; }


        public async Task<IActionResult> OnPostAsync([FromBody] ReqReservacion res) {
            string urlCreate = "/System/Reservations/Create";

            if ((res.Ad + res.Insen + res.Mn) <= 0) {
                return new JsonResult(new {
                    ok = false,
                    redirect = new alertVM(
                        "No es posible crear la reserva", "" +
                        "No se puede crear una reserva sin pasajeros.",
                        AlertType.Error
                    )
                });
            }
            if (res.Mn > 0 && (res.Ad + res.Insen) <= 0) {
                return new JsonResult(new {
                    ok = false,
                    redirect = new alertVM(
                        "No es posible crear la reserva", "" +
                        "No se puede crear una reserva en la que solo viajen menores.",
                        AlertType.Error
                    )
                });
            }

            TempData["Alert.Title"] = "Reserva exitosa";
            TempData["Alert.Message"] = "Se realizó correctamente la reservación";
            TempData["Alert.Type"] = (int)AlertType.Success;

            return new JsonResult(new {
                ok = true,
                redirect = Url.Page(urlCreate)
            });
        }


        public Hora[] hours { get; set; }
        public LugarPickup[] pickups { get; set; }
        public FormaPago[] methodOfPay { get; set; }
        public Task OnGet() => LoadFormDataAsync();

        private async Task LoadFormDataAsync() {
            hours = await HoursHelper.getHoursBusiness();
            pickups = await GetterApi.GetPickups();
            methodOfPay = await GetterApi.GetMethodsOfPay();
        }

    }
}
