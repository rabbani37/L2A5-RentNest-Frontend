"use server"

type LoginActionState = {
    success: boolean;
    statusCode: number;
    message: string;
    data: {accessToken: string, refreshToken: string} | null;
}



export const loginAction = async (prevState: LoginActionState, formData: FormData) => {

    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const result = await res.json();

    return result;
}