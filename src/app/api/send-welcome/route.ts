import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // طبق مستندات Supabase، اطلاعات کاربر در فیلد user قرار دارد
    const user = body.user;
    const email = user?.email;
    const metadata = user?.user_metadata;
    const firstName = metadata?.first_name || 'User';
    const lang = metadata?.language || 'en'; // زبانی که در متادیتا ذخیره کردی

    if (!email) return NextResponse.json({ error: 'Email missing' }, { status: 400 });

    // تنظیم محتوا بر اساس زبان
    const content = {
      en: { subject: 'Welcome to SafiPay', msg: `Hello ${firstName}, welcome!` },
      fa: { subject: 'به صافی‌پی خوش آمدید', msg: `سلام ${firstName} عزیز، خوش آمدید!` }
    };

    const t = content[lang as keyof typeof content] || content.en;

    await resend.emails.send({
      from: 'SafiPay <onboarding@safipay.net>',
      to: [email],
      subject: t.subject,
      html: `<div style="direction: ${lang === 'fa' ? 'rtl' : 'ltr'};">${t.msg}</div>`
    });

    // مهم: طبق مستندات، هوک باید یک پاسخ موفق (Success) برگرداند
    return NextResponse.json({ response: 'ok' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}