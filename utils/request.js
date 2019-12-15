import fetch from "cross-fetch";

export default async function request({
    method,
    url,
    body
}) {
    let response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(body)
    });

    return {
        statusCode: response.status,
        headers: response.headers,
        body: await response.json()
    }

}