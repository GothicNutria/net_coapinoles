using static net_coapinoles.ApiRoutes;
namespace net_coapinoles.Models.DTO;

public class Reservas {
    public int Id { get; set; }
    public string Fechareg { get; set; }
    public string Fecha { get; set; }
    public int Vendedor_Id { get; set; }
    public int ClienteId { get; set; }
    public string Horario { get; set; }
    public int IdPickup { get; set; }
    public string LugarPickup { get; set; }
    public string HoraPickup { get; set; }
    public int UsuarioId { get; set; }
    public int EstatusId { get; set; }
    public string Notas { get; set; }
    public string Hotel { get; set; }
    public int TotalPax { get; set; }
    public int Ad { get; set; }
    public int AdConfirm { get; set; }
    public int Mn { get; set; }
    public int MnConfirm { get; set; }
    public int Insen { get; set; }
    public object InsenConfirm { get; set; }
    public string Cupon { get; set; }
    public string ClaveConfirmacion { get; set; }
    public double Total { get; set; }
    public double Saldo { get; set; }
    public int MonedaId { get; set; }
    public double TipoCambio { get; set; }
    public bool Bloqueada { get; set; }
    public int LugarCheckin { get; set; }
    public string HoraTour { get; set; }
    public bool Directo { get; set; }
    public int IdAPI { get; set; }
    public int FormaPago { get; set; }
    public string ConfirmAPI { get; set; }
    public Cliente Cliente { get; set; }
}
public class ReqReservacion {
    public int? Id { get; set; }
    public string Fecha { get; set; }
    public int? ClienteId { get; set; }
    public string Nombre { get; set; }
    public string Celular { get; set; }
    public int? HoraTour { get; set; }
    public string HorarioTour { get; set; }
    public int? IdPickup { get; set; }
    public string LugarPickup { get; set; }
    public string HoraPickup { get; set; }
    public int? UsuarioId { get; set; }
    public string Notas { get; set; }
    public string Hotel { get; set; }
    public int Ad { get; set; }
    public int Mn { get; set; }
    public int Insen { get; set; }
    public string Cupon { get; set; }
    public string Total { get; set; }
    public string Saldo { get; set; }
    public string Totalusd { get; set; }
    public string Saldousd { get; set; }
    public int? MonedaId { get; set; }
    public double? TipoCambio { get; set; }
    public int? LugarCheckin { get; set; }
    public bool? Directo { get; set; }
    public int? FormaPago { get; set; }
    public double PrecioAdulto { get; set; }
    public double PrecioMenor { get; set; }
}

public class ResReservacion {
    public int Id { get; set; }
    public string?Fecha { get; set; }
    public string?Hora { get; set; }
    public string?Usuario { get; set; }
    public string?HoraTour { get; set; }
    public string Cliente { get; set; }
    public int ClienteId { get; set; }
    public string Celular { get; set; }
    public string?Confirmacion { get; set; }
    public int?Adultos { get; set; }
    public int?AdultosConfim { get; set; }
    public int?Menores { get; set; }
    public int? MenoresConfim { get; set; }
    public int?Insen { get; set; }
    public int? InsenConfim { get; set; }
    public bool Transporte { get; set; }
    public decimal TipoCambio { get; set; }
    public string?LugarPickup { get; set; }
    public string?HoraPickup { get; set; }
    public string?FormaPago { get; set; }
    public int?FormaPagoId { get; set; }
    public string?Notas { get; set; }
    public int? PickId { get; set; }
    public decimal Total { get; set; }
    public decimal TotalUsd { get; set; }
    public decimal?Saldo { get; set; }
    public string?Moneda { get; set; }
    public List<ReqPagos>?Pagos { get; set; }
}