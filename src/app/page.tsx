// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // هر کسی که / رو زد، مستقیم بره به فارسی (پیش‌فرض)
  redirect('/en');
}