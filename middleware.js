import { NextResponse } from 'next/server';

import { auth } from '@/auth';

export default auth((req) => {
    const { nextUrl } = req;
    const pathname = nextUrl.pathname;

    // Check if the user is authenticated
    const isAuthenticated = !!req.auth;


    // Check if the requested route is an public page
    const isPublicRoute = pathname == "/sign-in";

    /**
     * Redirect to login if the route is protected and the user is not authenticated
     */
    if (!isPublicRoute && !isAuthenticated) {
        const loginUrl = new URL(`/sign-in`, req.url);
        return NextResponse.redirect(loginUrl);
    }

    /**
     * Prevent authenticated users from visiting Public Pages
     * Redirect to the page indicated by `next` parameter, or default to DEFAULT_REDIRECTION
     * ALSO You can redirect users as per their role
     */
    if (isAuthenticated && isPublicRoute) {
        const nextPath = "/";
        return NextResponse.redirect(new URL(nextPath, req.url));
    }

    // Allow access to the route for other route
    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};