export const formateTel = (value) => {
    const digits = value.replace(/\D/g, '').substring(0, 10);
    const areaCode = digits.substring(0, 3);
    const prefix = digits.substring(3, 6);
    const suffix = digits.substring(6, 10);

    if (digits.length > 6) {
        return `(${areaCode}) ${prefix}-${suffix}`;
    } else if (digits.length > 3) {
        return `(${areaCode}) ${prefix}`;
    } else if (digits.length == 1 && value == "(") {
        return null;
    } else if (digits.length > 0) {
        return `(${areaCode}`;
    }
}

export const completeUnFormated = (str = "") => str.replace(/\D/g, "");

