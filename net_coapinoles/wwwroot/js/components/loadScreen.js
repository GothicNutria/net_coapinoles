const timeAnim = 150

export default (messages) => {
    let screen, barContainer, successWidget, icon, stateText;
    let active = false;
    let progressBarPorcentage, progressTitle, progressBar

    async function loadScreen() {
        screen = $("#load-panel");
        barContainer = screen.find(".progress-group");
        successWidget = $(".finallScreen");
        icon = successWidget.find(".bi");
        stateText = successWidget.find(".finallScreen-text");

        progressBarPorcentage = barContainer.find(".progress-porcentage")
        progressTitle = barContainer.find(".progress-title")
        progressBar = barContainer.find(".progress-bar")
    }

    function fadeInAsync($el, ms) { return new Promise(r => $el.fadeIn(ms, r)); }
    function fadeOutAsync($el, ms) { return new Promise(r => $el.fadeOut(ms, r)); }
    function animateAsync($el, props, ms) { return new Promise(r => $el.animate(props, ms, r)); }

    async function onComplete(msg, ic, bg) {
        await fadeOutAsync(barContainer, timeAnim);
        icon.removeClass().addClass(`bi ${ic}`);
        stateText.text(msg);
        screen.addClass(bg);
        await fadeInAsync(successWidget, timeAnim);
        await new Promise(r => setTimeout(r, 1000));
        await animateAsync(screen, { opacity: 0 }, timeAnim);
        screen.removeClass(bg).hide();
        successWidget.hide()
        barContainer.show();
        active = false;
        set(0, 0, 0)
    }

    const icons = { success: "bi-check-circle-fill", error: "bi-exclamation-diamond-fill" };
    const onError = async () => await onComplete(messages.error, icons.error, "bg-danger");
    function set(from, to, duration = 1000) {
        const start = performance.now();

        function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.floor(from + (to - from) * progress);
            progressBarPorcentage[0].textContent = `(${value}%)`;
            progressBar.css("width", `${value}%`)

            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    async function setProgress(progress) {
        if (!active) return;
        set(0, progress)
        if (progress >= 100) {
            await new Promise(r => setTimeout(r, 1000));
            await onComplete(messages.success, icons.success, "bg-success");
        }
    }

    async function show() {
        if (active) return;
        active = true;
        if (!screen) await loadScreen();

        successWidget.hide();
        barContainer.show();

        screen.show().css("opacity", 0);
        await animateAsync(screen, { opacity: 1 }, timeAnim);

        progressTitle.text(messages.title)
        await setProgress(10);
    }

    function hide() {
        if (active) return; // no puede ocultar mientras está activo
        screen?.hide();
        setProgress(0);
    }

    function setMessages(msgs) { messages = msgs; }

    return { show, hide, onError, setProgress, setMessages };
};
