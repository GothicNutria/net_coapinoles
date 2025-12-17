namespace net_coapinoles.Models.DTO;

public class ReqGastos {
    public int Id { get; set; }
    public string FechaGasto { get; set; }
    public string Descripcion { get; set; }
    public double Total { get; set; }
}

public class ResGastos : ReqGastos {
    public string Fecha { get; set; }
    public int UserId { get; set; }
    public bool Estatus { get; set; }
}
