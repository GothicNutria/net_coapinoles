namespace net_coapinoles.Models.DTO;

public class ReqPagos {
    public int Id { get; set; }
    public int ReservaId { get; set; }
    public string FechaReg { get; set; }
    public string Fechapago { get; set; }
    public int Formaid { get; set; }
    public decimal Total { get; set; }
    public int MonedaId { get; set; }
    public string Referencia { get; set; }
    public string Notas { get; set; }
    public bool AplicaComision { get; set; }
    public int UsuarioId { get; set; }
    public int Estatus { get; set; }
    public string FormaPago { get; set; }
}
