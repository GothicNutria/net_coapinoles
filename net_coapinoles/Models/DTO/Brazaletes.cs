namespace net_coapinoles.Models.DTO;

public class ReqBrazaletesIniciales {
    public int BrazaletesInicialesAd { get; set; }
    public int BrazaletesInicialesMn { get; set; }
}

public class ReqBrazaletesFinales {
    public int IdRegistro { get; set; }
    public int BrazaletesFinalesAd { get; set; }
    public int BrazaletesFinalesMn { get; set; }
}

public class ResBrazaletes {
    public int BrazaletesFinalesAd { get; set; }
    public int BrazaletesFinalesMn { get; set; }
    public int BrazaletesInicialesAd { get; set; }
    public int BrazaletesInicialesMn { get; set; }
    public string Fecha { get; set; }
    public int Id { get; set; }
    public bool TurnoTerminado { get; set; }
    public int UsuarioID { get; set; }
}
