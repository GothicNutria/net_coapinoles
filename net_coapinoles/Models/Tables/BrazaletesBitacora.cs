using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class BrazaletesBitacora
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int IdRegistroBrazaletes { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int CantidadAd { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int CantidadMn { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int CantidadInsen { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int ReservacionId { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public bool Estatus { get; set; }

    public virtual Brazalete IdRegistroBrazaletesNavigation { get; set; } = null!;

    public virtual Reservacione Reservacion { get; set; } = null!;
}
