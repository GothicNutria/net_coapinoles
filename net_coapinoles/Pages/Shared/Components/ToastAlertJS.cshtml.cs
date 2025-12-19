using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using net_coapinoles.Models;
using net_coapinoles.Resources.Enums;

namespace net_coapinoles.Pages.Shared.Components
{
    public class ToastAlertJSModel : PageModel {
        public alertVM Alert { get; set; } = new alertVM(null, null, null);

        // Recibe por query: ?type=Success&title=...&message=...
        public void OnGet(string type, string title, string message) {
            if (!string.IsNullOrEmpty(type)) {
                // intentar parsear por nombre del enum (Success, Warn, Error) o por entero
                if (Enum.TryParse<AlertType>(type, true, out var parsed))
                    Alert.Type = parsed;
                else if (int.TryParse(type, out var ival) && Enum.IsDefined(typeof(AlertType), ival))
                    Alert.Type = (AlertType)ival;

                Alert.Title = title ?? "";
                Alert.Message = message ?? "";
            }
        }
    }
}
