import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from "jsonwebtoken"


const AUTH_ROUTES = ["/login", "/register"]
const PUBLIC_ROUTES = ["/", "/properties"]
const DASHBOARD_ROUTE = ["dashboard", "landlord-dashboard", "admin-dashboard"]

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {

    const pathname = request.nextUrl.pathname;
    let userRole = null

    const accessToken = request.cookies.get("accessToken")?.value as string
    const decodeToken = accessToken ? jwt.decode(accessToken) as JwtPayload : null;

    if (decodeToken) {
        userRole = decodeToken.role
    }
    if (accessToken && AUTH_ROUTES.includes(pathname)) {
        if (userRole === "TENANT") {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
        if (userRole === "LANDLORD") {
            return NextResponse.redirect(new URL('/landlord-dashboard', request.url))
        }
        if (userRole === "ADMIN") {
            return NextResponse.redirect(new URL('/admin-dashboard', request.url))
        }
        else {
            return NextResponse.redirect(new URL('/', request.url))

        }
    }





    if (pathname.startsWith("/dashboard") && userRole !== "TENANT") {
        return NextResponse.redirect(new URL('/', request.url))
    }
    else if (pathname.startsWith("/landlord-dashboard") && userRole !== "LANDLORD") {
        return NextResponse.redirect(new URL('/', request.url))
    }
    else if (pathname.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
        return NextResponse.redirect(new URL('/', request.url))
    }





    const isPublicRoute = PUBLIC_ROUTES.some(route => route === pathname || pathname.startsWith(route + "/"));
    const isAuthRoute = AUTH_ROUTES.some(route => route === pathname || pathname.startsWith(route + "/"));
    // Authencated page protection  
    if (!accessToken && !isPublicRoute && !isAuthRoute) {
        return NextResponse.redirect(new URL('/login', request.url))
    }










    return NextResponse.next()
}

export const config = {
    matcher: [
        // '/dashboard/:path*',
        // '/admin-dashboard/:path*',

        '/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)',
    ]
}