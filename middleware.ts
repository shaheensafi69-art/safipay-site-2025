import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// لیست کامل زبان‌های هدف: فارسی، انگلیسی، پشتو، فرانسوی، آلمانی، ترکی، عربی، روسی
const locales = ['fa', 'en', 'ps', 'fr', 'de', 'tr', 'ar', 'ru'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۱. نادیده گرفتن فایل‌های سیستم، عکس‌ها و API
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // ۲. بررسی وجود زبان در ابتدای آدرس
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // ۳. اگر زبان در آدرس نبود، ریدایرکت به زبان پیش‌فرض (en)
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};