using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Listaprecio
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Nombre { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateTime? Desde { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateTime? Hasta { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Usuarioid { get; set; }

    public virtual ICollection<Listapreciosdetalle> Listapreciosdetalles { get; set; } = new List<Listapreciosdetalle>();
}
