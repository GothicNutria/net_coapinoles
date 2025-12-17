using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Reservacionesdetalle
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Actividadid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Adulto { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Menor { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal? Costoad { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal? Costomn { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal? Descuento { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Reservacionid { get; set; }

    public int Act { get; set; }

    public decimal Costoact { get; set; }

    public virtual Actividade Actividad { get; set; } = null!;

    public virtual Reservacione Reservacion { get; set; } = null!;
}
