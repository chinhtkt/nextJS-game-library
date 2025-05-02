import {cookies} from "next/headers";
import {decrypt} from "@/lib/sessions";
import {NextResponse} from "next/server";
import {use} from "react";


const protectedRoutes = ['/', '/games', /^\/games\/[^\/]+$/, '/add-game'];
const publicRoutes = ['/login']
export default async function middleware (req, res) {
    const {get} = await cookies()
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.some(route => {
        if (route instanceof RegExp) return route.test(path);
        return route === path;
    });
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = get('session')?.value;
    const session = await decrypt(cookie);


    if(isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if(isPublicRoute && session?.userId) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    return NextResponse.next();
}