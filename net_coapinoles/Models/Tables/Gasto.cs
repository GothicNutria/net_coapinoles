using System;
using System.Collections.Generic;

namespace net_coapinoles.Models.Tables;

/// <summary>
/// TRIAL
/// </summary>
public partial class Gasto
{
    /// <summary>
    /// TRIAL
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public string Descripcion { get; set; } = null!;

    /// <summary>
    /// TRIAL
    /// </summary>
    public int UserId { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public decimal Total { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public bool Estatus { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateOnly? FechaReg { get; set; }

    /// <summary>
    /// TRIAL
    /// </summary>
    public DateOnly? Fecha { get; set; }

    public virtual Usuario User { get; set; } = null!;
}
