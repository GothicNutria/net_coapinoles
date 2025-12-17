using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Brazalete
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateOnly Fecha { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int UsuarioId { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int BrazaletesInicialesAd { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int BrazaletesFinalesAd { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int BrazaletesInicialesMn { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int BrazaletesFinalesMn { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public bool TurnoTerminado { get; set; }

    public int BrazaletesInicialesAct { get; set; }

    public int BrazaletesFinalesAct { get; set; }

    public virtual ICollection<BrazaletesBitacora> BrazaletesBitacoras { get; set; } = new List<BrazaletesBitacora>();

    public virtual Usuario Usuario { get; set; } = null!;
}
