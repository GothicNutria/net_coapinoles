import { getHoursPickup, getCosts } from "../api/getters.js";
import to12Hour from "../components/to12hour.js"
import calcPrice from "../calcPrice.js";
import currencys from "/js/currencys.js";
import toastAlert from "/js/components/toastAlert.js"
import { formateTel, completeUnFormated } from "/js/components/formatTelephone.js"

$(() => {

    //Pantalla de carga
    const $loadPanel = $("#load-panel")
    const $loadBarPanel = $("#load-bar-panel")

    /* selectors */
    const $checkTransport = $("#transport");
    const $timepicker = $("#timepicker");
    const $zonePickup = $("#zonePickup");
    const $buffet = $("#buffetCheck");
    const $pricesTotal = $("#pricesTotal");
    const $pagement = $("#pagement");
    const $adults = $("#adultsIn");
    const $childs = $("#childsIn");
    const $elders = $("#elderlyIn");
    const $client = $("#client")
    const $tel = $("#numberPhone")
    const $intTel = $("#internationalNumberPhone")

    const actID = {
        true: 1,
        false: 3
    }

    const iti = window.intlTelInput($tel[0], {
        initialCountry: "mx",
        separateDialCode: true,
        loadUtils: () => import("/lib/intl-tel-input/utils.js"),
    });

    let hasSelectHour = false, hasSelectPickup = false;
    const currentPrices = {}, currentCosts = {MXN: {}, USD: {}}; // { MXN: 123, USD: 5 }

    /* date picker */
    const picker = MCDatepicker.create({
        el: '#datepicker',
        minDate: new Date(),
        selectedDate: new Date(),
        customClearBTN: "Limpiar",
        customOkBTN: "Aceptar",
        customCancelBTN: "Cancelar",
        customWeekDays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        customMonths: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    });

    /* small helpers */
    const props = {
        isBuffet: () => $buffet.val() === "true",
        haveTransport: () => $checkTransport.is(":checked"),
        formattedDay: () => `${picker.getYear()}-${String(picker.getMonth() + 1).padStart(2, "0")}-${String(picker.getDate()).padStart(2, "0")}`,
        timeID: () => $timepicker.val(),
        zoneID: () => $zonePickup.val(),
        zoneName: () => $zonePickup.data("name")
    };

    const getCounts = () => {
        return {
            adults: Number($adults.val() || 0),
            childs: Number($childs.val() || 0),
            elders: Number($elders.val() || 0)
        };
    };

    const computeCostForGroup = (group) => {
        const transport = group.find(p => p.actid == 5) ?? null;
        const buffet = group.find(p => p.actid != 5) ?? null;
        let cost = { adulto: 0, menor: 0, moneda: null };

        if (!props.isBuffet() && props.haveTransport() && transport) {
            cost.adulto = transport.adulto ?? 0;
            cost.menor = transport.menor ?? 0;
            cost.moneda = transport.moneda;
        } else if (props.isBuffet() && !props.haveTransport() && buffet) {
            cost.adulto = buffet.adulto ?? 0;
            cost.menor = buffet.menor ?? 0;
            cost.moneda = buffet.moneda;
        } else if (props.isBuffet() && props.haveTransport() && buffet && transport) {
            cost.adulto = (buffet.adulto ?? 0) + (transport.adulto ?? 0);
            cost.menor = (buffet.menor ?? 0) + (transport.menor ?? 0);
            cost.moneda = buffet.moneda;
        }
        return cost;
    };

    const renderPrices = (groups) => {
        $pricesTotal.empty();
        currentPrices.MXN = currentPrices.USD = 0;

        let hasPrice = false;

        groups.forEach(group => {
            const cost = computeCostForGroup(group);
            const { adults, childs, elders } = getCounts();
            const price = calcPrice(cost, adults, childs + elders) ?? 0;
            const currency = currencys[cost.moneda];

            if (!currency) return;

            currentPrices[currency] = price;
            currentCosts[currency] = cost;

            if (price > 0) hasPrice = true;

            $pricesTotal.append(`
            <div class="col form-floating">
                <div class="form-control">
                    <label class="mb-0">${price}</label>
                </div>
                <label class="w-100">Total (${currency})</label>
            </div>
        `);
        });

        $("#totalCost").toggle(hasPrice);
    };


    //Carga precios
    const setPrices = async () => {
        try {
            const prices = await getCosts(props.formattedDay());
            console.log(prices)
            const groups = Object.values((prices || []).reduce((acc, obj) => { (acc[obj.moneda] ??= []).push(obj); return acc; }, {}));
            renderPrices(groups);
        } catch (err) {
            console.error("setPrices error", err);
        }
    };

    //Pickups
    const enableHourPickup = async () => {
        $("#timePickupDropdownItems").empty();
        $("#timePickupDropdown .dropdown-text").text("Seleccione...")
        $("#timePickup, #timePickupDropdown").prop("disabled", true).val("");
        hasSelectHour = !!props.timeID();
        hasSelectPickup = !!props.zoneID();

        if (props.haveTransport() && hasSelectHour && hasSelectPickup) {
            const data = { HoraId: props.timeID(), PickId: props.zoneID(), Hora: '' };
            const hourspicks = await getHoursPickup(data) || [];
            hourspicks.forEach(h => $("#timePickupDropdownItems").append(`
                <li>
                    <button class="dropdown-item" type="button" data-content="${h.hora}" data="${h.id}">
                        ${h.hora}
                    </button>
                </li>
            `));
            $("#timePickupDropdown, #timePickup").prop("disabled", false);
        }
    };

    //Habilita métodos de pago
    const setMethodsOfPay = () => {
        const show = props.isBuffet() || (props.haveTransport() && !props.isBuffet());

        $pagement.toggleClass("d-none", !show);

        const inputs = $pagement.find(":input");
        inputs.prop("disabled", !show);

        if (!show) {
            inputs.val("").removeAttr("name");
        }
    };


    //Selector dinámico con dropdown
    $(document).on("click", ".dropdown-item", function (e) {
        e.preventDefault();
        const val = $(this).attr("data");
        const menu = $(this).closest(".dropdown-menu");
        const target = menu.data("target");
        if (target) {
            $(target).data("name", $(this).data("content"))
            $(target).val(val).trigger("change");
        }
        const $container = $(this).closest(".form-floating");
        $container.find(".dropdown-text").text($(this).text());
    });

    $client.on("input", function () {
        const value = this.value;

        const option = $(`#datalistClients option[value="${value}"]`);

        if (!option.length) return;

        const clientTel = option.attr("label");


        iti.setNumber(clientTel);

        if (iti.isValidNumber()) {
            $tel.val(formateTel(iti.getNumber(intlTelInputUtils.numberFormat.NATIONAL)));
            $intTel.val(clientTel)
        }
    })

    $tel.on("input", function () {
        const val = completeUnFormated($(this).val())
        const countryCode = "+" + iti.getSelectedCountryData().dialCode;
        const internationalTel = countryCode + val
        $intTel.val(internationalTel)
    })

    $buffet.on("change", () => { setMethodsOfPay(); setPrices(); });
    $timepicker.on("change", () => { hasSelectHour = !!props.timeID(); enableHourPickup(); });
    $zonePickup.on("change", () => { hasSelectPickup = !!props.zoneID(); enableHourPickup(); });

    $checkTransport.on("change", () => {
        $(".transport-related").toggleClass("d-none", !props.haveTransport());
        $(".transport-related").find(":input").prop("disabled", !props.haveTransport());
        enableHourPickup();
        setMethodsOfPay();
        setPrices();
    });

    [$adults, $childs, $elders].forEach($el => $el.on("input", setPrices));

    $(".needs-validation").on("submit", async function (e) {
        e.preventDefault();
        e.stopPropagation();
        const form = this;

        if (form.checkValidity()) {
            $loadPanel.removeClass("d-none")
            $loadBarPanel.addClass("w-25")
            const counts = getCounts();
            const notes = $("#notes").val().trim()
            const payload = {
                fecha: picker.getFullDate(),
                HoraTour: Number($timepicker.val() ?? 0),
                HorarioTour: String($timepicker.data("name") ?? ""),

                Directo: Boolean(!props.haveTransport()),

                LugarPickup: props.haveTransport() ? String(props.zoneName() ?? "") : null,
                IdPickup: props.haveTransport() ? Number(props.zoneID()) : null,
                HoraPickup: props.haveTransport() ? String($("#timePickup").data("name") ?? "") : null,

                clienteId: Number(
                    $(`#datalistClients option[value="${$client.val()}"]`).data("id")
                ) || 0,
                Nombre: String($client.val() ?? "").trim(),
                Celular: ($intTel.val().length ?? 0) >= 3 ? ($intTel.val() ?? "") : "",

                Ad: Number(counts.adults ?? 0),
                Mn: Number(counts.childs ?? 0),
                Insen: Number(counts.elders ?? 0),

                FormaPago: $("#method_page").val()
                    ? Number($("#method_page").val())
                    : null,

                Total: String(currentPrices.MXN ?? "0"),
                Saldo: String(currentPrices.MXN ?? "0"),
                Totalusd: String(currentPrices.USD ?? "0"),
                Saldousd: String(currentPrices.USD ?? "0"),

                precioAdulto: currentCosts.MXN.adulto ?? 0,
                precioMenor: currentCosts.MXN.menor ?? 0,

                ActId: actID[props.isBuffet()] ?? 0,
                TipoCambio: 0,


                Act: 0,
                Notas: notes.trim() == "" ? null : notes
            };
            console.log(payload)
            
            const res = await fetch("/System/Reservations/Create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "RequestVerificationToken": document.querySelector(
                        'input[name="__RequestVerificationToken"]'
                    ).value
                },
                body: JSON.stringify(payload)
            })

            const data = await res.json();

            if (data.ok && data.redirect) {
                $loadPanel.addClass("bg-success")
                $loadBarPanel.addClass("w-100")
                location.href = data.redirect;
            } else {

                $loadPanel.addClass("bg-danger");

                $loadBarPanel.addClass("w-50").removeClass("w-25")

                setTimeout(() => {
                    $loadPanel.addClass("d-none");
                    $loadPanel.removeClass("bg-danger");
                    $loadBarPanel.removeClass("w-50");

                    $("#toast-alert").remove()
                    toastAlert(data.body.title, data.body.message, data.body.type)
                }, 1500);
            }
        }
    });

    /* init */
    setMethodsOfPay();
    setPrices();
    enableHourPickup();
});
