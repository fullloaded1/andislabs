import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAccess } from './lib/gate';

export async function proxy(request: NextRequest) {
  // Path requested
  const path = request.nextUrl.pathname;

  // Check cookie presence for lightweight proxy validation
  const token = request.cookies.get('gate_session')?.value;

  if (path === '/gate') {
    if (token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // Exclude any api paths and _next
  if (path.startsWith('/api/') || path.startsWith('/_next/')) {
    return NextResponse.next();
  }
  
  if (!token) {
    return NextResponse.redirect(new URL('/gate', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - images, fonts, icons, etc (public assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
