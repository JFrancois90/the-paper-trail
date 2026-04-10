import { NextRequest, NextResponse } from 'next/server';

const SITE_PASSWORD = 'factcheck';
const COOKIE_NAME = 'paper-trail-auth';

export function middleware(request: NextRequest) {
  // Skip password check for the login page itself and static assets
  if (
    request.nextUrl.pathname === '/login' ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/favicon') ||
    request.nextUrl.pathname.endsWith('.png') ||
    request.nextUrl.pathname.endsWith('.ico') ||
    request.nextUrl.pathname.endsWith('.svg')
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get(COOKIE_NAME);
  if (authCookie?.value === SITE_PASSWORD) {
    return NextResponse.next();
  }

  // Check for password submission via query param
  const password = request.nextUrl.searchParams.get('password');
  if (password === SITE_PASSWORD) {
    const response = NextResponse.redirect(new URL(request.nextUrl.pathname, request.url));
    response.cookies.set(COOKIE_NAME, SITE_PASSWORD, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  }

  // Redirect to login
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('next', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
