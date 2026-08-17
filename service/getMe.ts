"use server"

import { cookies } from "next/headers";
import { cache } from "react";

export const getMe = cache(async () => {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return {
            success: false,
            message: "User is not logged in",
            data:null
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
        method: "GET",
        headers: {
            // authorization: `Bearer ${accessToken}`,
            cookie: `accessToken=${accessToken}`,
            "content-type": "application/json"
        },
        cache: "no-cache",
    });

    const result = await res.json();
    return result;
})