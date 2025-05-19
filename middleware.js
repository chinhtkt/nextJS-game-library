import {NextResponse} from "next/server";
import {cookies} from "next/headers";


const protectedRoutes = ['/home', '/games', /^\/games\/[^\/]+$/, '/add-game'];
const publicRoutes = ['/login']
export default async function middleware (req, res) {
    // const {get} = await cookies()
    // const path = req.nextUrl.pathname;
    // const isProtectedRoute = protectedRoutes.some(route => {
    //     if (route instanceof RegExp) return route.test(path);
    //     return route === path;
    // });
    // const isPublicRoute = publicRoutes.includes(path);
    //
    // const cookie = get('auth_session')?.value;
    //
    // if(isProtectedRoute && !cookie) {
    //     return NextResponse.redirect(new URL('/login', req.nextUrl))
    // }
    //
    // if(isPublicRoute && cookie) {
    //     return NextResponse.redirect(new URL('/', req.nextUrl))
    // }

    return NextResponse.next();
}