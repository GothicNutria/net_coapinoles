using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Usuario
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
    public string? Correo { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string? Telefono { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string Username { get; set; } = null!;

    /// <summary>
    /// TRIAL
    /// </summary>
    public string Password { get; set; } = null!;

    /// <summary>
    /// TRIAL
    /// </summary>
    public bool Estatus { get; set; }

    public virtual ICollection<Brazalete> Brazaletes { get; set; } = new List<Brazalete>();

    public virtual ICollection<Gasto> Gastos { get; set; } = new List<Gasto>();

    public virtual ICollection<Reservacione> Reservaciones { get; set; } = new List<Reservacione>();

    public virtual ICollection<Reservacionespago> Reservacionespagos { get; set; } = new List<Reservacionespago>();
}
