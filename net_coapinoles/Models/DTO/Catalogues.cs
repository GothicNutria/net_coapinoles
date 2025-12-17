namespace net_coapinoles.Models.DTO;

public class FormaPago {
    public int Id { get; set; }
    public string Descripcion { get; set; }
}

public class LugarPickup {
    public int ID { get; set; }
    public string Descripcion { get; set; }
    public bool Status { get; set; }
}

public class Hora {
    public int Id { get; set; }
    public string hora { get; set; }
}

public class ReqHoraPickup {
    public int PickId { get; set; }
    public int HoraId { get; set; }
    public string Hora { get; set; }
}
