// src/app/en/layout.tsx (یا سایر لایوت‌های زبانی)
export default function LTRLayout({ children }: { children: React.ReactNode }) {
  // به جای برگرداندن خالی، یک div با جهت مشخص بگذار
  return (
    <div dir="ltr" className="contents">
      {children}
    </div>
  );
}