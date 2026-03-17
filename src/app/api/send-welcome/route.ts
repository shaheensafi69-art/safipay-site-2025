import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Extract user info from Supabase Hook body
    const email = body.record?.email;
    const firstName = body.record?.raw_user_meta_data?.first_name || 'User';
    // Get language from metadata (default to 'en' if not set)
    const lang = body.record?.raw_user_meta_data?.language || 'en';

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    // Define content for different languages
    const content = {
      en: {
        subject: 'Welcome to SafiPay',
        title: `Hello ${firstName}!`,
        message: 'Welcome to SafiPay. Your international multi-currency account is ready.',
        button: 'Go to Dashboard'
      },
      fa: {
        subject: 'به صافی‌پی خوش آمدید',
        title: `سلام ${firstName} عزیز!`,
        message: 'به صافی‌پی خوش آمدید. حساب چندارزی بین‌المللی شما آماده استفاده است.',
        button: 'ورود به پنل کاربری'
      }
    };

    // Select the correct language (fallback to English)
    const t = content[lang as keyof typeof content] || content.en;

    await resend.emails.send({
      from: 'SafiPay <onboarding@safipay.net>',
      to: [email],
      subject: t.subject,
      html: `
        <div style="direction: ${lang === 'fa' ? 'rtl' : 'ltr'}; font-family: sans-serif; padding: 20px; background: #000; color: #fff;">
          <h1 style="color: #f59e0b;">${t.title}</h1>
          <p>${t.message}</p>
          <a href="https://safipay.net/dashboard" style="display: inline-block; padding: 10px 20px; background: #f59e0b; color: #000; text-decoration: none; border-radius: 5px; font-weight: bold;">
            ${t.button}
          </a>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}