
using net_coapinoles.Resources.Enums;

namespace net_coapinoles.Models {
    public class alertVM(string?title, string?message, AlertType?type) {
        public string?Title { get; set; } = title;
        public string?Message { get; set; } = message;
        public AlertType?Type { get; set; } = type;
    }
}
