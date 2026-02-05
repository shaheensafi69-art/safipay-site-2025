import { NextResponse } from 'next/server';

// بدون import معمولی cheerio – فقط dynamic import
export async function GET() {
  try {
    // dynamic import فقط سمت سرور
    const cheerioModule = await import('cheerio');
    const cheerio = cheerioModule.load; // یا cheerioModule اگر نیاز به چیز دیگه‌ای داشتی

    const CAMPAIGN_URL = 'https://gogetfunding.com/safipay-%d8%a7%d9%88%d9%84%db%8c%d9%86-%d8%a8%d8%a7%d9%86%da%a9-%d8%af%db%8c%d8%ac%db%8c%d8%aa%d8%a7%d9%84-%d8%a8%d8%b1%d8%a7%db%8c-%d9%85%db%8c%d9%84%db%8c%d9%88%d9%86%d9%87%d8%a7-%d8%a7/';

    const res = await fetch(CAMPAIGN_URL, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SafiPayBot/1.0)'
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const html = await res.text();
    const $ = cheerio(html);

    // استخراج اعداد – این سلکتورها رو بعداً اگر لازم بود دقیق‌تر می‌کنیم
    const raisedText = $('.raised-amount, .amount-raised, [class*="raised"]').first().text().trim() || '0';
    const goalText = $('.goal-amount, .target-amount, [class*="goal"]').first().text().trim() || '80000';
    const donorsText = $('.donors-count, [class*="donor"], .supporters-count').first().text().trim() || '0';

    const raised = parseFloat(raisedText.replace(/[$,]/g, '')) || 0;
    const goal = parseFloat(goalText.replace(/[$,]/g, '')) || 80000;
    const donors = parseInt(donorsText.replace(/[^0-9]/g, '')) || 0;
    const percentage = goal > 0 ? Math.round((raised / goal) * 100) : 0;

    return NextResponse.json({
      raised,
      goal,
      donors,
      percentage,
      last_updated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching GoGetFunding data:', error);

    return NextResponse.json({
      raised: 0,
      goal: 80000,
      donors: 0,
      percentage: 0,
      last_updated: new Date().toISOString(),
      error: 'Could not fetch live data'
    }, { status: 200 });
  }
}