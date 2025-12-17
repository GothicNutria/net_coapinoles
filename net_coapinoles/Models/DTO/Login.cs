namespace net_coapinoles.Models.DTO;

public class ReqLogin() {
    public string Username { get; set; }
    public string Password { get; set; }
}


public class ResLogin {
    public int Status { get; set; }
    public string Message { get; set; }
    public string Token { get; set; }
    public string Exp { get; set; }
    public string Username { get; set; }
}
