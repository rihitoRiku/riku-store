"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "./../lib/supabaseClient";
import { Login } from "./login";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/darkmode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiShoppingCart } from "react-icons/hi2";
import { Menu } from "lucide-react";

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
      },
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
      setIsLoggedIn(false); // Update state
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Logout error:", err.message);
      } else {
        console.error("Logout error:", String(err));
      }
    }
  };
  return (
    <>
      <div className="flex w-full items-start justify-center gap-1.5 bg-yellow-200 px-4 py-2 text-start font-inter text-sm text-black md:h-10 md:text-center md:text-base">
        🚀
        <p>
          Get a <strong>special discount</strong> by bringing your website
          project to us during our early launch!
        </p>
      </div>
      <div className="sticky top-0 z-50 w-full border-b border-neutral-100/30 bg-background/60 backdrop-blur-md dark:border-none">
        <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-2 py-4 md:px-4">
          <Link href="/">
            <div className="flex items-center gap-4">
              {/* <Image
                src="/logo.svg"
                alt="Logo"
                width={34}
                height={34}
                className="h-[36px] w-[36px] rounded-full border"
              /> */}
              <span className="font-passion-conflict text-lg font-medium md:text-xl ps-2">
                RikuStore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <Link
                  href="https://rikustore.vercel.app/templates"
                  // href="http://localhost:3000/templates"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Browse Templates
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="https://rikustore.vercel.app/#pricing"
                  // href="http://localhost:3000/#pricing"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="https://rikustore.vercel.app/#contact"
                  // href="http://localhost:3000/#contact"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 md:gap-3">
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
              // <></>
            )}
            <ModeToggle />
            {/* Mobile Navigation - Hidden on desktop */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="default"
                  size="icon"
                  className="rounded-xl bg-custom-light shadow-none md:p-4 md:text-lg"
                >
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                </Button>
                {/* <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle menu</span>
                </Button> */}
              </SheetTrigger>
              <SheetContent side="right" className="dark:bg-neutral-950 bg-neutral-200 border-none">
                <SheetHeader>
                  <SheetTitle className="text-2xl text-start">Menu</SheetTitle>
                  <SheetDescription>
                   
                  </SheetDescription>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  <Link
                    href="https://rikustore.vercel.app/templates"
                    className="text-lg font-medium hover:underline"
                  >
                    Browse Templates
                  </Link>
                  <Link
                    href="https://rikustore.vercel.app/#pricing"
                    className="text-lg font-medium hover:underline"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="https://rikustore.vercel.app/#contact"
                    className="text-lg font-medium hover:underline"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <Dialog open={isLogoutOpen} onOpenChange={setIsLogoutOpen}>
            <DialogContent className="max-w-[24rem] rounded-lg border-none bg-custom-cream dark:bg-custom-dark">
              <DialogHeader>
                <DialogTitle className="text-2xl">Logout?</DialogTitle>
                <div className="">
                  <p className="mb-4 text-sm">
                    Are you sure you want to logout? You’ll need to sign in
                    again to access your account.
                  </p>
                  <Button
                    className="float-none mx-auto w-[8rem] bg-red-400 text-white dark:bg-red-400 sm:float-end"
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
    </>
  );
}
