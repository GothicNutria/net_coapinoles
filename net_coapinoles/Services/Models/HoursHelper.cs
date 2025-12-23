using net_coapinoles.Models.DTO;
using System.Globalization;

namespace net_coapinoles.Services.Models {
    public static class HoursHelper {
        private static string[] allowedHours = [
            "09:00",
            "10:00",
            "11:00"
        ];
        public static async Task<Hora[]> getHoursBusiness() =>
            (await GetterApi.GetHours() ?? []).Where(
                n => allowedHours.Contains(n.hora)
            ).ToArray();

        public static string hourFormat(string hour) {
            var t = DateTime.ParseExact(hour, "HH:mm", CultureInfo.InvariantCulture);

            return t.Minute == 0
                ? t.ToString("h tt", CultureInfo.InvariantCulture)
                : t.ToString("h:mm tt", CultureInfo.InvariantCulture);
        }

    }
}
