import { getReservations } from '../api/getters.js'

$(async function () {
    const data = await getReservations();

    $('#reservationsTable').DataTable({
        data: data,
        columns: [
            {
                title: "", data: null, orderable: false, className: 'w-30px',
                render: (rowData) => `
                    <div class="dropdown">
                        <button
                            class="btn border-0"
                            type="button"
                            id="reserve-${rowData.Id}"
                            data-coreui-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="reserve-${rowData.Id}">
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-eye-fill text-dark rounded-2 border me-2 p-1 bi-aspect-ratio"></i> Ver resrevación
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-pencil-fill text-white rounded-2 me-2 p-1 bi-aspect-ratio" style="background: #FFB426"></i> Editar reservación
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-calendar-x-fill text-white rounded-2 me-2 p-1 bi-aspect-ratio bg-danger"></i> Cancelar reservación
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-credit-card-fill text-white rounded-2 me-2 p-1 bi-aspect-ratio" style="background: #40C78F"></i> Ver pagos
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-person-fill-add text-white rounded-2 me-2 p-1 bi-aspect-ratio bg-secondary"></i> Agregar pasajeros
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-whatsapp text-white rounded-2 me-2 p-1 bi-aspect-ratio" style="background: #25d366"></i> Reenviar a WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                `
            },
            {
                title: 'Fecha', data: 'Fecha', className: "position-relative", 
                render: function (text, row) {
                    let estado = row.FormaPagoId == 5
                        ? '<span class="border border-warning bg-warning bg-opacity-10 text-warning p-1 pt-0 pb-0 rounded-2">Directo</span>'
                        : '<span class="border border-danger bg-danger bg-opacity-10 text-danger p-1 pt-0 pb-0 rounded-2">Pendiente</span>';

                    if (row.pagos?.length > 0) {
                        const totales = row.pagos.filter(p => p.Estatus === 1).map(p =>
                             p.Formaid == 2 ? p.Total * row.tipoCambio                                    : p.Total
                        );

                        const totalPagado = totales.reduce((a, b) => a + b, 0);

                        if ((row.total - totalPagado) <= 1) {
                            estado = '<span class="border border-success bg-success bg-opacity-10 text-success p-1 pt-0 pb-0 rounded-2">Pagado</span>';
                        }
                    }

                    return `<div class="d-flex gap-2">${
                        new Date(text).toLocaleDateString('es-MX') + " " + estado
                    }</div>`;
                }
            },
            { title: 'Confirmación', data: 'Confirmacion' },
            {
                title: 'Cliente', data: null,
                render: data => data.Hora != 'directo' ? data.Cliente: (data.Notas || data.Cliente)
            },
            { title: 'Celular', data: 'Celular', className: "text-start" },
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
    $("#reservationsTable colgroup").remove();
    $("#spinner-table").hide()
    $("#container-table").removeClass("d-none")
});
