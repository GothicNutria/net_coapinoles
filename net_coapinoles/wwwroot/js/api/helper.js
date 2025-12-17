export default async function callApi(url, body = {}, method = "POST") {
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

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }

    return await response.json();
}
