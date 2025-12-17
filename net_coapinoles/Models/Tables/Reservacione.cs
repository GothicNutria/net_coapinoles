using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Reservacione
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateTime? Fechareg { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateTime? Fecha { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? VendedorId { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Clienteid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Usuarioid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Estatusid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Notas { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Ad { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Adconfirm { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public bool? Bloqueada { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Claveconfirmacion { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Cupon { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public bool? Directo { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Horapickup { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Horatour { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Horario { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Hotel { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Idpickup { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Lugarcheckin { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Lugarpickup { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Mn { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Mnconfirm { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Monedaid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal? Saldo { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal Tipocambio { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal Total { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Totalpax { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Confirmapi { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Idapi { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Insen { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Insenconfirm { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Formapago { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal Totalusd { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal Saldousd { get; set; }

    public int Act { get; set; }

    public int Actconfirm { get; set; }

    public string AutorizaCortesia { get; set; } = null!;

    public virtual ICollection<BrazaletesBitacora> BrazaletesBitacoras { get; set; } = new List<BrazaletesBitacora>();

    public virtual Cliente Cliente { get; set; } = null!;

    public virtual Estatus? Estatus { get; set; }

    public virtual Formasdepago? FormapagoNavigation { get; set; }

    public virtual Moneda Moneda { get; set; } = null!;

    public virtual ICollection<Reservacionesdetalle> Reservacionesdetalles { get; set; } = new List<Reservacionesdetalle>();

    public virtual ICollection<Reservacionespago> Reservacionespagos { get; set; } = new List<Reservacionespago>();

    public virtual Usuario? Usuario { get; set; }
}
