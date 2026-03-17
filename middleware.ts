import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const locales = ['fa', 'en', 'ps', 'fr', 'de', 'tr', 'ar', 'ru'];
const defaultLocale = 'en';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ۱. نادیده گرفتن فایل‌های سیستمی، تصاویر و API (بهینه شده)
  if (
    pathname.startsWith('/_next') || 
    pathname.includes('/api/') ||
    pathname.includes('.') || 
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // ایجاد ریسپانس اولیه
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
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  // دریافت سشن کاربر
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

  // استخراج زبان فعلی از آدرس
  const currentLang = pathname.split('/')[1] || defaultLocale;

  // ۴. امنیت مسیرهای حساس (Protective Routes)
  // اگر کاربر لاگین نباشد و بخواهد به صفحات شخصی (/user/...) برود
  // استثنا: صفحه لاگین و ثبت‌نام نباید قفل باشند
  const isUserPage = pathname.includes(`/${currentLang}/user`) && 
                    !pathname.includes('/login') && 
                    !pathname.includes('/register');

  if (isUserPage && !session) {
    const url = request.nextUrl.clone();
    url.pathname = `/${currentLang}/login`; // هدایت به صفحه لاگین اصلی
    return NextResponse.redirect(url);
  }

  // ۵. جلوگیری از دسترسی مجدد به لاگین/ثبت‌نام برای کاربران وارد شده
  if (session && (pathname.includes('/login') || pathname.includes('/register'))) {
    const url = request.nextUrl.clone();
    url.pathname = `/${currentLang}/user/dashboard`;
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  // مچر بهینه شده برای تمام صفحات به جز موارد استثنا
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}