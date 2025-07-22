export async function handler(event) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            hello: "Deu certo! Você está autenticado.",
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }
}