namespace net_coapinoles.Models.DTO {
    public class ResReservacionDetalles {
        public int Status { get; set; }
        public String? Message { get; set; }
        public ReqReservacionDetalles? Data { get; set; }

    }
    public class ReqReservacionDetalles {
        public int? Id { get; set; }
        public int Actividadid { get; set; }
        public int Adulto { get; set; }
        public int Menor { get; set; }
        public int act { get; set; }
        public decimal Costoad { get; set; }
        public decimal Costomn { get; set; }
        public decimal Costoact { get; set; }
        public decimal Descuento { get; set; }
        public int? Reservacionid { get; set; }
    }
}
