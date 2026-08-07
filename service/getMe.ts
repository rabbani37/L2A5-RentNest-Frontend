"use server"

import { abortOnSynchronousPlatformIOAccess } from "next/dist/server/app-render/dynamic-rendering";
import { cookies } from "next/headers";

export const getMe = async () => {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return{
            success:false,
            message:"User is not logged in"
        }
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
        method: "GET",
        headers: {
            // authorization: `Bearer ${accessToken}`,
            cookie: `accessToken=${accessToken}`,
            "content-type":"application/json"
        }
    });

    const result = await res.json();
    console.log("From getMe: ", result);
    return result;
}