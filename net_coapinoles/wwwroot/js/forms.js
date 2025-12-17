$(function () {
    const forms = $('.needs-validation');

    $("input[type='tel']").each(function () {
        const $input = $(this);

        window.intlTelInput(this, {
            initialCountry: "mx",
            separateDialCode: true,
        });

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
            // Formato de número

            const digits = this.value.replace(/\D/g, '').substring(0, 10);
            const areaCode = digits.substring(0, 3);
            const prefix = digits.substring(3, 6);
            const suffix = digits.substring(6, 10);

            if (digits.length > 6) {
                this.value = `(${areaCode}) ${prefix}-${suffix}`;
            } else if (digits.length > 3) {
                this.value = `(${areaCode}) ${prefix}`;
            } else if (digits.length > 0) {
                this.value = `(${areaCode}`;
            }

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
