using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using net_coapinoles.Models.DTO;
using net_coapinoles.Services;
using net_coapinoles.Services.Models;
using System.Drawing;
using System.Text.Json;
using static Azure.Core.HttpHeader;

namespace net_coapinoles.Pages.System.Reservations
{
    public class ShowModel : PageModel
    {
        public string?confirmacion { get; set; }
        public string?fecha {  get; set; }
        public string?hora { get; set; }
        public string?tipo_reserva {  get; set; }
        public int?algo { get; set; }
        public bool?transport { get; set; }
        public string?Point {  get; set; }
        public string? PointHour { get; set; }
        public string? clientName { get; set; }
        public string? clientTel { get; set; }
        public int?ad { get; set; }
        public int? mn { get; set; }
        public int? insen { get; set; }
        public string?method_pay { get; set; }
        public string?notes { get; set; }
        public decimal priceMXN { get; set; }
        public decimal priceUSD { get; set; }
        public async Task OnGetAsync(int id){
            ResReservaciones reserve = (await GetterApi.GetReservations(id))[0];
            confirmacion = reserve.Confirmacion;
            fecha = reserve.Fecha?.ToString("dd/MM/yyyy");
            hora = reserve.Hora;
            tipo_reserva = (reserve.ActId <= 2) ? "Buffete" : "A la carta";
            transport = reserve.Transporte ?? false;
            Point = reserve.Lugarpickup ?? "";
            PointHour = reserve.Horapickup != null ? HoursHelper.hourFormat(reserve.Horapickup) : "";
            clientName = reserve.Cliente;
            ad = reserve.Adultos;
            mn = reserve.Menores;
            insen = reserve.Insen;
            notes = reserve.Notas;
            method_pay = reserve.FormaPago;
            priceMXN = reserve.total;
            priceUSD = reserve.totalUsd;
        }
    }
}
