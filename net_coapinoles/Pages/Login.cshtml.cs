using net_coapinoles.Models.DTO;
using net_coapinoles.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Security.Claims;

namespace net_coapinoles.Pages
{
 
    [AllowAnonymous]
    public class LoginModel : PageModel {
        [BindProperty] public string User { get; set; }
        [BindProperty] public string Password { get; set; }
        public string ErrorMessage { get; set; }
        public void OnGet(){}
        public async Task<IActionResult> OnPostAsync() {
            if (!ModelState.IsValid)
                return Page();

            try {
                ReqLogin loginData = new() { Username = User, Password = Password };
                ResLogin res = await SetterApi.LoginAsync(loginData);

                if (res == null || res.Status != 200) {
                    ErrorMessage = "Usuario o contraseña incorrectos";
                    return Page();
                }

                var claims = new List<Claim> {
                    new Claim(ClaimTypes.Name, User),
                    new Claim("token", res.Token)
                };

                var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var principal = new ClaimsPrincipal(identity);

                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    principal,
                    new AuthenticationProperties {
                        IsPersistent = true
                    }
                );


                return RedirectToPage("/System/Index");
            }
            catch (Exception ex) {
                ErrorMessage = "Usuario o contraseña incorrectos";
                return Page();
            }

        }

    }
}
