using Microsoft.AspNetCore.Mvc.RazorPages;
using net_coapinoles.Models.DTO;
using net_coapinoles.Services;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace net_coapinoles.Pages.Shared.Components.Modals {
    public class AddPayment : PageModel {
        public ResReservaciones?reserve { get; set; }
        public FormaPago[] methodOfPay { get; set; }
        public decimal saldo { get; set; }
        public decimal exchange { get; set; }
        public async Task OnGet(int id) {
            reserve = (await GetterApi.GetReservations(id))[0];
            methodOfPay = await GetterApi.GetMethodsOfPay();
            if (reserve != null) {
                var totalPagado = reserve.pagos
                    .Where(p => p.Estatus == 1)
                    .Select(p => p.Formaid == 2
                        ? p.Total * reserve.tipoCambio
                        : p.Total)
                    .Aggregate(0m, (acc, curr) => acc + curr);

                saldo = reserve.total - totalPagado;
                exchange = Math.Ceiling(saldo / (reserve?.tipoCambio ?? 1));
            }
        }
    }
}
