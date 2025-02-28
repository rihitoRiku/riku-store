"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "./../lib/supabaseClient";
import { Login } from "./login";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModeToggle } from "@/components/darkmode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiShoppingCart } from "react-icons/hi2";

export function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isLogoutOpen, setIsLogoutOpen] = useState(false); // Logout dialog state
  const router = useRouter();

  // Check session on mount and update login state
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        setIsLoggedIn(false);
        return;
      }
      setIsLoggedIn(!!data.session); // Set true if session exists
    };

    checkSession();

    // Listen for auth state changes (e.g., login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth event:", event, session);
        setIsLoggedIn(!!session);
        if (event === "SIGNED_OUT") {
          router.push("/"); // Redirect to home after logout
        }
      }
    );

    // Cleanup listener on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  // Handle logout
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setIsLogoutOpen(false); // Close dialog
      setIsLoggedIn(false);   // Update state
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Logout error:", err.message);
      } else {
        console.error("Logout error:", String(err));
      }
    }
  };

  return (
    <div className="bg-background w-full">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-4 py-6">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full md:w-[60px] md:h-[60px]"
            />
            <span className="text-lg md:text-2xl font-medium">
              Riku Store
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Jade" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-32 bg-custom-light dark:border-none dark:bg-custom-dark"
                align="end"
                forceMount
              >
                <DropdownMenuItem>
                  <Link className="w-full" href="/dashboard">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-600"
                  onClick={() => setIsLogoutOpen(true)}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Login />
          )}
          <ModeToggle />
        </div>

        <Dialog open={isLogoutOpen} onOpenChange={setIsLogoutOpen}>
          <DialogContent className="max-w-[24rem] rounded-lg border-none bg-custom-cream dark:bg-custom-dark">
            <DialogHeader>
              <DialogTitle className="text-2xl">Logout?</DialogTitle>
              <div className="">
                <p className="mb-4 text-sm">
                  Are you sure you want to logout? You’ll need to sign in again
                  to access your account.
                </p>
                <Button
                  className="text-white w-[8rem] sm:float-end float-none mx-auto dark:bg-red-400 bg-red-400"
                  onClick={handleLogout}
                >
                  Confirm
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}