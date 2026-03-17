import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const locales = ['fa', 'en', 'ps', 'fr', 'de', 'tr', 'ar', 'ru'];
const defaultLocale = 'en';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۱. نادیده گرفتن فایل‌های سیستمی و تصاویر
  if (
    pathname.startsWith('/_next') || 
    pathname.includes('/api/') ||
    pathname.includes('.') || 
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // ایجاد ریسپانس اولیه با هدرهای درخواست
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // ۲. تنظیم سوپابیس با مدیریت صحیح کوکی‌ها
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  // دریافت سشن کاربر (بسیار مهم: از getUser برای امنیت بیشتر در Middleware استفاده کنید)
  const { data: { session } } = await supabase.auth.getSession();

  // ۳. مدیریت زبان (i18n)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  const currentLang = pathname.split('/')[1] || defaultLocale;

  // ۴. اصلاح منطق صفحات محافظت شده
  // نکته: نام مسیرها را دقیقاً مطابق با پروژه (signup و login) قرار دادیم
  const isAuthPage = pathname.includes('/login') || pathname.includes('/signup');
  const isUserPage = pathname.includes(`/${currentLang}/user`) && !isAuthPage;

  // اگر کاربر لاگین نیست و می‌خواهد به داشبورد برود
  if (isUserPage && !session) {
    const url = request.nextUrl.clone();
    url.pathname = `/${currentLang}/login`;
    return NextResponse.redirect(url);
  }

  // اگر کاربر لاگین است و می‌خواهد دوباره به لاگین یا ثبت‌نام برود
  if (session && isAuthPage) {
    const url = request.nextUrl.clone();
    url.pathname = `/${currentLang}/user/dashboard`;
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}