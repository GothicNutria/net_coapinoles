using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Reservacionespago
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Reservaid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateTime? Fechareg { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateTime? Fechapago { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Formaid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal Total { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Monedaid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Referencia { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Notas { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public bool? Aplicacomision { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Usuarioid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int? Formapagoid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Estatus { get; set; }

    public virtual Formasdepago Forma { get; set; } = null!;

    public virtual Moneda Moneda { get; set; } = null!;

    public virtual Reservacione Reserva { get; set; } = null!;

    public virtual Usuario Usuario { get; set; } = null!;
}
