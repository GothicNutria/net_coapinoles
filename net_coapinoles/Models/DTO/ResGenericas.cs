namespace net_coapinoles.Models.DTO;

public class ResGenerico {
    public bool Exitoso { get; set; }
    public string MsgResult { get; set; }
    public object Data { get; set; }
}

public class Respuesta {
    public string Confirmacion { get; set; }
    public bool Exitoso { get; set; }
    public string Mensaje { get; set; }
}
