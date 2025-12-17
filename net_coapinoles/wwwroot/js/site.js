$(function () {

    const $sidebar = $(".sidebar");
    const storageKey = "sidebarNarrow";

    if (localStorage.getItem(storageKey) === "1") {
        $sidebar.addClass("sidebar-narrow");
        $("#toggleSidebarNarrow i")
            .removeClass("bi-caret-left-fill")
            .addClass("bi-caret-right-fill");
    }

    $("#toggleSidebarNarrow").on("click", function () {

        $sidebar.toggleClass("sidebar-narrow");
        const active = $sidebar.hasClass("sidebar-narrow") ? "1" : "0";

        if (active === "1") {
            $("#toggleSidebarNarrow i")
                .removeClass("bi-caret-left-fill")
                .addClass("bi-caret-right-fill");
        } else {
            $("#toggleSidebarNarrow i")
                .removeClass("bi-caret-right-fill")
                .addClass("bi-caret-left-fill");
        }

        localStorage.setItem(storageKey, active);
    });
});
