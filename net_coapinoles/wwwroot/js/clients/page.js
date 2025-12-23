import { getClients } from "/js/api/getters.js"
import "/lib/data-table/datatables.js"
import "/js/clients/Modal.js"

$(async function () {
    const data = await getClients();

    var table = $('#displayTable').DataTable({
        data: data,
        columns: [
            {
                title: 'Nombre', data: 'Nombre'
            },
            {
                title: 'Teléfono', data: 'Telefono'
            },
            {
                title: 'Correo', data: 'Correo'
            },
            {
                title: 'Acciones', data: null, render: (rowData) => `
                    <button class="btn btn-primary edit-client-btn"  data-id="${rowData.Id}">
                        <i class="bi bi-pencil-fill me-1"></i> Editar
                    </button>
                `
            }

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
        const data = await getClients();

        table.clear();
        table.rows.add(data);
        table.draw(false); // mantiene la página actual
        $("#spinner-table").hide()
        $("#container-table").show()
    });
});
