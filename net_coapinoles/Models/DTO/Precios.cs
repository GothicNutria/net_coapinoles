namespace net_coapinoles.Models.DTO;

public class Precio {
    public int Id { get; set; }
    public int Actid { get; set; }
    public double Adulto { get; set; }
    public double Menor { get; set; }
    public int Moneda { get; set; }
}

public class InfoPrecio {
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Desde { get; set; }
    public string Hasta { get; set; }
    public List<PrecioDetalle> PreciosDetalles { get; set; }
}

public class PrecioDetalle {
    public int? Id { get; set; }
    public int? Listaprecioid { get; set; }
    public int Actividadid { get; set; }
    public double Precioad { get; set; }
    public double Preciomn { get; set; }
    public int Monedaid { get; set; }
    public string Moneda { get; set; }
}
