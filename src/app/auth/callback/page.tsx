"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        // console.error("Session error:", error.message);
        router.push("/");
        return;
      }
      if (data.session) {
        // console.log("Session established:", data.session);
        router.push("/dashboard");
      } else {
        // console.error("No session found");
        router.push("/");
      }
    };

    handleCallback();
  }, [router]);

  return <div>Loading...</div>;
}