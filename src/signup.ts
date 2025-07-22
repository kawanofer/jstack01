export async function handler(event) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            hello: "Vamos criar a conta",
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }
}