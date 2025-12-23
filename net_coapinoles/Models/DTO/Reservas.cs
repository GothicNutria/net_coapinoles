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
    public int? id { get; set; }
    public DateTime fecha { get; set; }
    public int clienteId { get; set; }
    public string? Nombre { get; set; }
    public string? celular { get; set; }
    public int? HoraTour { get; set; }
    public string? HorarioTour { get; set; }
    public int? IdPickup { get; set; }
    public string? LugarPickup { get; set; }
    public string? HoraPickup { get; set; }
    public int? usuarioId { get; set; }
    public string? Notas { get; set; }
    public string? Hotel { get; set; }
    public int? Ad { get; set; }
    public int? Mn { get; set; }
    public decimal precioAdulto { get; set; }
    public decimal precioMenor { get; set; }
    public decimal precioAct { get; set; }
    public int? Insen { get; set; }
    public int ActID { get; set; }
    public int? Act { get; set; }
    public string? Cupon { get; set; }
    public string? Total { get; set; }
    public string? Saldo { get; set; }
    public string? Totalusd { get; set; }
    public string? Saldousd { get; set; }
    public int? MonedaId { get; set; }
    public decimal TipoCambio { get; set; }
    public int? LugarCheckin { get; set; }
    public bool? Directo { get; set; }
    public int? FormaPago { get; set; }
    public string AutorizaCortesia { get; set; } = "N/A";
}

public class ResReservacion {
    public int idReserva { get; set; }
    public string confirmacion { get; set; }
    public bool exitoso { get; set; }
    public string mensaje { get; set; }
}
public class ResReservaciones {
    public int? Id { get; set; }
    public DateTime? FechaRegistrada { get; set; }
    public DateTime? Fecha { get; set; }
    public int UsuarioId { get; set; }
    public int ActId { get; set; }
    public string Usuario { get; set; }
    public string Hora { get; set; }
    public string Lugarpickup { get; set; }
    public string Horapickup { get; set; }
    public string Cliente { get; set; }
    public string FormaPago { get; set; }
    public int FormaPagoId { get; set; }
    public int clienteId { get; set; }
    public string Celular { get; set; }
    public string Confirmacion { get; set; }
    public int? Adultos { get; set; }
    public int? AdultosConfim { get; set; }
    public int? Menores { get; set; }
    public int? MenoresConfim { get; set; }
    public int? Insen { get; set; }
    public int? InsenConfim { get; set; }
    public int act { get; set; } = 0;
    public int actconfirm { get; set; } = 0;
    public bool? Transporte { get; set; }
    public string Notas { get; set; }
    public int? pickId { get; set; }
    public int? HoraTour { get; set; }
    public decimal total { get; set; }
    public decimal totalUsd { get; set; }
    public decimal tipoCambio { get; set; }
    public decimal saldo { get; set; }
    public decimal Saldousd { get; set; }
    public string moneda { get; set; }
    public List<ReqPagos> pagos { get; set; }
}