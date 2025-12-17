using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Listapreciosdetalle
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Listaprecioid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Actividadid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal? Precioad { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal? Preciomn { get; set; }

    public decimal? Precioact { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Monedaid { get; set; }

    public virtual Actividade Actividad { get; set; } = null!;

    public virtual Listaprecio Listaprecio { get; set; } = null!;

    public virtual Moneda Moneda { get; set; } = null!;
}
