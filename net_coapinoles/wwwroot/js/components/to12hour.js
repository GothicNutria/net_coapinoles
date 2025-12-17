export default (hour24) => {
    const [h, m] = hour24.split(":").map(Number);

    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;

    return m === 0
        ? `${hour12} ${period}`
        : `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}