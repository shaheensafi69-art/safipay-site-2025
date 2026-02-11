import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ۱. حتماً de را به این لیست اضافه کن
const locales = ['fa', 'en', 'ps', 'fr', 'de'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۲. نادیده گرفتن فایل‌های سیستم و عکس‌ها
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // ۳. بررسی وجود زبان در آدرس
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // ۴. اگر زبان نداشت، برو به زبان پیش‌فرض
  // نکته: اینجا چک می‌کنیم که دوبار زبان اضافه نشود
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};