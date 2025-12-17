using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Actividade
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Descripcion { get; set; }

    public virtual ICollection<Listapreciosdetalle> Listapreciosdetalles { get; set; } = new List<Listapreciosdetalle>();

    public virtual ICollection<Reservacionesdetalle> Reservacionesdetalles { get; set; } = new List<Reservacionesdetalle>();
}
