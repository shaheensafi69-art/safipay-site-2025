// middleware.ts  ← در ریشه پروژه (کنار src یا app)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fa', 'en', 'ps', 'fr'];
const defaultLocale = 'fa';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // مسیرهای سیستمی را نادیده بگیر
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // اگر مسیر با هیچ زبانی شروع نشده باشد → به زبان پیش‌فرض هدایت کن
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    const newUrl = new URL(request.url);
    newUrl.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};