using net_coapinoles.Models.DTO;
using System;

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

            var t = DateTime.ParseExact(hour, "HH:mm", null);
            string formatted = t.ToString("h:mm tt");

            if (formatted.Contains(":00"))
                formatted = formatted.Replace(":00", "");

            return formatted;
        }
    }
}
