export default async function callApi(url, body = {}, method = "POST") {

    if (!Boolean(token)) {
        location.href = '/Login'
    }
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };
    if (method !== "GET" && method !== "HEAD") {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text || response.status);
    }

    return text ? JSON.parse(text) : null;
}
