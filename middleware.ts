// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fa'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  // ساده‌ترین روش: نگاه به هدر accept-language
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  // اولین زبان قابل قبول را برمی‌گرداند
  const preferred = acceptLanguage.split(',')[0].trim().split('-')[0];
  return locales.includes(preferred) ? preferred : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // اگر مسیر قبلاً زبان دارد، کاری نکن
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // زبان مناسب را پیدا کن و ریدایرکت کن
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // همه مسیرها به جز موارد زیر
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};