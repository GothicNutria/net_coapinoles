using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Formasdepago
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Descripcion { get; set; }

    public virtual ICollection<Reservacione> Reservaciones { get; set; } = new List<Reservacione>();

    public virtual ICollection<Reservacionespago> Reservacionespagos { get; set; } = new List<Reservacionespago>();
}
