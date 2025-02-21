// src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      autoRefreshToken: true,  // Enable token refresh
      persistSession: true,    // Store session in localStorage
      detectSessionInUrl: true // Detect tokens in URL fragment
    },
  }
);