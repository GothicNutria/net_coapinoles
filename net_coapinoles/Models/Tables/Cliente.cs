using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Cliente
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string Nombre { get; set; } = null!;

    /// <summary>
    /// TRIAL
    /// </summary>
    public string Telefono { get; set; } = null!;

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Direccion { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Correo { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public int Estatusid { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Notas { get; set; }

    public virtual ICollection<Reservacione> Reservaciones { get; set; } = new List<Reservacione>();
}
