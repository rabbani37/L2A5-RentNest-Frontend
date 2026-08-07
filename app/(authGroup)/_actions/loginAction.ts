"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


type LoginActionState = {
    success: boolean;
    statusCode: number;
    message: string;
    data: { accessToken: string, refreshToken: string } | null;
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

    if (result.success) {
        const cookieStore = await cookies();
        cookieStore.set("accessToken", result.data?.accessToken || "", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 24, // 1 days
        });
        cookieStore.set("refreshToken", result.data?.refreshToken || "", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        redirect("/dashboard", "replace");

    };
    return result;
}