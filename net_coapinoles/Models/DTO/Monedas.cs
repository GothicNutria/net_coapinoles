namespace net_coapinoles.Models.DTO;

public class ResponseMonedaDet {
    public int Status { get; set; }
    public string Message { get; set; }
    public MonedasDetalle MonedasDetalle { get; set; }
}

public class MonedasDetalle {
    public double Valor { get; set; }
    public string Fecha { get; set; }
    public int MonedaId { get; set; }
}
