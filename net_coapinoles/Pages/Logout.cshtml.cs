using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace net_coapinoles.Pages
{
    public class LogoutModel : PageModel {
        public async Task<IActionResult> OnGet() {
            // Borrar sesión
            HttpContext.Session.Clear();

            // Borrar cookies de autenticación
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            // Redirigir al login
            return RedirectToPage("/Login");
        }
    }
}
