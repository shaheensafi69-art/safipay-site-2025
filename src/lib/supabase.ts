import { createBrowserClient } from '@supabase/ssr'

// این مقادیر را مستقیم گذاشتم تا مطمئن شویم کار می‌کند
const supabaseUrl = 'https://cishnxqxaieaxmdglnpl.supabase.co'
const supabaseAnonKey = 'sb_publishable_pfDmE-IgkHDHWcb1Jshr3g_UcgiPC3B'

export const createClientSideSupabase = () => {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}