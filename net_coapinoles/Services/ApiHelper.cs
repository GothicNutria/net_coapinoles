using net_coapinoles.Models.DTO;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace net_coapinoles.Services {
    public class ApiHelper {

        private static HttpClient client = new();
        public static IHttpContextAccessor Accessor { get; set; }
        public static HttpContext Current => Accessor?.HttpContext;
        public static string? Token => Accessor?.HttpContext?.User?.FindFirst("token")?.Value;


        public static async Task<T> CallApiAsync<T>(string ruta, object body = null, string method = "POST") {
            if (string.IsNullOrEmpty(Token) && !ruta.Equals(ApiRoutes.Auth.Login)) {
                if (Current != null) {
                    Current.Response.Redirect("/Login");
                    return default; // evita continuar la ejecución
                }
                throw new UnauthorizedAccessException("Sin credenciales");
            }


            using var request = new HttpRequestMessage(new HttpMethod(method), ruta);

            if (body != null && (method == "POST" || method == "PATCH")) {
                string jsonBody = JsonSerializer.Serialize(body);
                request.Content = new StringContent(jsonBody, Encoding.UTF8, "application/json");
            }
            if (!string.IsNullOrEmpty(Token)) {
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", Token);
            }

            var response = await client.SendAsync(request);

            if (!response.IsSuccessStatusCode) {
                string resp = await response.Content.ReadAsStringAsync();
                throw new Exception($"Error al llamar a {ruta}: {response.StatusCode} → {resp}");
            }
            string jsonResponse = await response.Content.ReadAsStringAsync();

            return JsonSerializer.Deserialize<T>(
                jsonResponse,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
            );
        }

    }
}
