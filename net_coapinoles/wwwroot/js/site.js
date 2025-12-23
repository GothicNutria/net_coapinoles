$(function () {

    const $sidebar = $(".sidebar");
    const storageKey = "sidebarNarrow";

    if (localStorage.getItem(storageKey) === "1") {
        $sidebar.addClass("sidebar-narrow show");
    }

    $("#toggleSidebarNarrow").on("click", function () {

        $sidebar.toggleClass("sidebar-narrow show");
        const active = $sidebar.hasClass("sidebar-narrow show") ? "1" : "0";

        if (active && $(window).width() > 992) {

        }


        localStorage.setItem(storageKey, active);
    });
});
