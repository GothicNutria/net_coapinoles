using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class MonedasDetalle
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int MonedaId { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateOnly Fecha { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal Valor { get; set; }

    public virtual Moneda Moneda { get; set; } = null!;
}
