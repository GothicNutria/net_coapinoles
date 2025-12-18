import { formateTel } from "./components/formatTelephone.js"
$(function () {
    const forms = $('.needs-validation');

    $("input[type='tel']").each(function () {
        const $input = $(this);

        const toggleFloating = () => {
            if ($input.val().length > 0) {
                $input.addClass("is-filled");
            } else {
                $input.removeClass("is-filled");
            }
        };
        $input.on("keypress", function (e) {
            const charCode = e.which ? e.which : e.keyCode;
            if (charCode < 48 || charCode > 57) e.preventDefault();
        });
        $input.on("input", function () {
            const formatTel = formateTel(this.value) ?? ""
            // Formato de número
            this.value = formatTel

            toggleFloating();
        });

        toggleFloating(); // inicializar al cargar
    });


    forms.on('submit', function (e) {
        const form = this;

        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        $(form).addClass('was-validated');
    });

    $(document).on("click", ".form-floating .dropdown-item", function (e) {
        e.preventDefault();
        const val = $(this).attr("data");         // valor real
        const text = $(this).text();              // texto visible

        // Buscar el dropdown correspondiente
        const $container = $(this).closest(".form-floating");
        $container.find(".dropdown-text").text(text)

        // Actualizar input hidden
        const targetInput = $container.find("input[type='hidden']");
        targetInput.val(val);
    });

    $(document).on("change", ".form-floating .form-check-input", function (e) {
        const checkbox = $(this);
        const value = checkbox.is(":checked");
        const arr = checkbox.data("options");
        const element = arr[value] || "Ninguno"

        const $container = $(this).closest(".form-switch");
        $container.find(".form-check-label").text(element)
    });

});
