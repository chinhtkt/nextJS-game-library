import {NextResponse} from "next/server";
import {cookies} from "next/headers";


const protectedRoutes = ['/add-game'];
export default async function middleware (req) {
    const headers = new Headers(req.headers);
    headers.set("x-current-path", req.nextUrl.pathname);
    const {get} = await cookies()
    const path = req.nextUrl.pathname;

    const isProtectedRoute = protectedRoutes.includes(path);

    const cookie = get('auth_session')?.value;

    if(isProtectedRoute && !cookie) {
        return NextResponse.redirect(new URL('/login', req.url))
    }


    return NextResponse.next({ headers });

}