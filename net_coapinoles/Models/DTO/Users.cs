namespace net_coapinoles.Models.DTO;

public class ReqCreateUser {
    public string Nombre { get; set; }
    public string Correo { get; set; }
    public string Telefono { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
}

public class ResUser {
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Correo { get; set; }
    public string Telefono { get; set; }
    public string Username { get; set; }
}
