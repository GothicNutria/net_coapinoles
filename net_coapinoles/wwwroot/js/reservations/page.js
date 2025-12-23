import { getReservations } from '../api/getters.js'
import "/lib/data-table/datatables.js"
import "/js/reservations/Modal.js"
$(async function () {
    const data = await getReservations();

    var table = $('#displayTable').DataTable({
        data: data,
        columns: [
            {
                title: "", data: null, orderable: false, className: 'w-30px',
                render: (rowData) => {
                    var pagos = rowData.pagos
                    var saldo = rowData.total
                    if (pagos.length > 0) {
                        var totales = pagos.filter(p => p.Estatus == 1).map((p) => {
                            if (p.Formaid == 2) { //dolares
                                return p.Total * rowData.tipoCambio
                            }
                            else {
                                return p.Total
                            }
                        })
                        var totalPagado = totales.reduce((cont, curr) => {
                            return cont + curr
                        }, 0)
                        saldo = rowData.total - totalPagado
                    }
                    return `<div class="dropdown">
                        <button
                            class="btn border-0 p-0"
                            type="button"
                            id="reserve-${rowData.Id}"
                            data-coreui-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="reserve-${rowData.Id}">
                            <li>
                                <a class="dropdown-item" href="/System/Reservations/${rowData.Id}">
                                    <i class="bi bi-eye-fill text-dark rounded-2 border me-2 p-1 bi-aspect-ratio"></i> Ver resrevación
                                </a>
                            </li>
                            ${(rowData.Hora != "directo" ? `
                                <li>
                                    <a class="dropdown-item" href="/System/Reservations/Update/${rowData.Id}">
                                        <i class="bi bi-pencil-fill text-white rounded-2 me-2 p-1 bi-aspect-ratio" style="background: #FFB426"></i> Editar reservación
                                    </a>
                                </li>
                            ` : "")}
                            <li>
                                <button class="dropdown-item cancelReserveBtn" data-id="${rowData.Id}">
                                    <i class="bi bi-calendar-x-fill text-white rounded-2 me-2 p-1 bi-aspect-ratio bg-danger"></i> Cancelar reservación
                                </button>
                            </li>
                            ${(saldo >= 1 ? `
                                <li>
                                    <button class="dropdown-item addPaymentBtn" data-id="${rowData.Id}">
                                        <i class="bi bi-credit-card-2-back-fill text-white rounded-2 me-2 p-1 bi-aspect-ratio" style="background: #00a6f4"></i> Añadir pago
                                    </button>
                                </li>
                            ` : "")}
                            <li>
                                <button class="dropdown-item paymentsBtn" data-id="${rowData.Id}">
                                    <i class="bi bi-credit-card-fill text-white rounded-2 me-2 p-1 bi-aspect-ratio" style="background: #40C78F"></i> Ver pagos
                                </button>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-person-fill-add text-white rounded-2 me-2 p-1 bi-aspect-ratio bg-secondary"></i> Agregar pasajeros
                                </a>
                            </li>
                            <li>
                                <button class="dropdown-item sendToWhatsappBtn" data-id="${rowData.Id}">
                                    <i class="bi bi-whatsapp text-white rounded-2 me-2 p-1 bi-aspect-ratio" style="background: #25d366"></i> Reenviar a WhatsApp
                                </button>
                            </li>
                        </ul>
                    </div>`
                }
            },
            {
                title: 'Fecha', data: 'Fecha', render: (text) => new Date(text).toLocaleDateString('es-MX')
            },
            {
                title: "Estado de pago", data: null, className: "position-relative", render: function (row) {
                    let estado = row.FormaPagoId == 5
                        ? '<span class="w-100 h-100 border border-warning bg-warning bg-opacity-10 text-warning p-1 pt-0 pb-0 rounded-2">Directo</span>'
                        : '<span class="w-100 h-100 border border-danger bg-danger bg-opacity-10 text-danger p-1 pt-0 pb-0 rounded-2">Pendiente</span>';

                    if (row.pagos?.length > 0) {
                        const totales = row.pagos.filter(p => p.Estatus === 1).map(p =>
                            p.Formaid == 2 ? p.Total * row.tipoCambio : p.Total
                        );

                        const totalPagado = totales.reduce((a, b) => a + b, 0);

                        if ((row.total - totalPagado) <= 1) {
                            estado = '<span class="w-100 h-100 border border-success bg-success bg-opacity-10 text-success p-1 pt-0 pb-0 rounded-2">Pagado</span>';
                        }
                    }
                    return `<div class="d-flex gap-2 w-100 h-100">
                        ${estado}
                    </div>`
                }
            },
            { title: 'Confirmación', data: 'Confirmacion' },
            {
                title: 'Cliente', data: null,
                render: data => data.Hora != 'directo' ? data.Cliente : (data.Notas || data.Cliente)
            },
            { title: 'Celular', data: 'Celular', className: "text-start", render: v => v ? v : "Desconocido" },
            {
                title: 'Transporte', data: 'Transporte', className: "position-relative",
                render: v => `
                    <i class="
                        bi
                        position-absolute
                        top-50
                        start-50
                        translate-middle
                        ${v ? "bi-check-square-fill" : "bi-check-square"}
                    ">
                    </i>
                `, orderable: false
            },
            {
                title: 'Adulto', data: 'Adultos'
            },
            {
                title: 'Menor', data: null, render: (data) => data.Menores + data.Insen
            },
            {
                title: 'Usuario', data: 'Usuario'
            },

        ],

        pageLength: 25,
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"
        },
        order: [[0, 'asc']]
    });
    $("#displayTable colgroup").remove();
    $("#spinner-table").hide()
    $("#container-table").show()

    $(document).on('table:reload', async () => {
        $("#spinner-table").show()
        $("#container-table").hide()
        const data = await getReservations();

        table.clear();
        table.rows.add(data);
        table.draw(false); // mantiene la página actual
        $("#spinner-table").hide()
        $("#container-table").show()
    });
});
