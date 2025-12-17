
using net_coapinoles.Resources.Enums;

namespace net_coapinoles.Models {
    public class alertVM(string title, string message, AlertType type) {
        public string Title { get; } = title;
        public string Message { get; } = message;
        public AlertType Type { get; } = type;
    }
}
