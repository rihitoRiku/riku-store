// src/app/auth/callback/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router
import { supabase } from "../../../lib/supabaseClient"; // Adjust path

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      console.log("Callback page loaded");
      console.log("URL hash:", window.location.hash);

      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Session error:", error.message);
        router.push("/");
        return;
      }

      if (data.session) {
        console.log("Session established:", data.session);
        router.push("/dashboard");
      } else {
        console.error("No session found");
        router.push("/");
      }
    };

    handleCallback();
  }, [router]);

  return <div>Loading...</div>;
}