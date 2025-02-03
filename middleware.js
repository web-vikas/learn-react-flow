
import { NextResponse } from "next/server";
import { auth } from "@/auth";

const publicRoutes = ["/sign-in"];

export default async function middleware(request) {
    const session = await auth();

    const isPublic = publicRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );
    const isLoginPage = request.nextUrl.pathname == "/sign-in"
    // check if already logged in and user try to sign-in page redirect to /
    if (session && isLoginPage) {
        const absoluteURL = new URL("/", request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }

    if (!session && !isPublic) {
        const absoluteURL = new URL("/sign-in", request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};