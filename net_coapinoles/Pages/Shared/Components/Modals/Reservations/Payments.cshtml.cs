using Microsoft.AspNetCore.Mvc.RazorPages;
using net_coapinoles.Models.DTO;
using net_coapinoles.Services;

namespace net_coapinoles.Pages.Shared.Components.Modals {
    public class PaymentsModel : PageModel {
        public ResReservaciones reserve { get; set; }
        public async Task OnGetAsync(int id) =>
            reserve = (await GetterApi.GetReservations(id))[0];
    }
}
