import jwt from "jsonwebtoken";

export const verifyTokenFunc = (token: string, secret: "access" | "refresh") => {
    const secretData = secret === "access" ? process.env.JWT_ACCESS_SECRET : process.env.JWT_REFRESH_SECRET

    try {
        const validToken = jwt.verify(token, secretData as string);
        return { success: true, data: validToken }
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error)
        return { success: false, error: message }
    }
}



