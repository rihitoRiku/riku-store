"use client";
import Image from "next/image";
import Link from "next/link";
import { Login } from "./login";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/darkmode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiShoppingCart } from "react-icons/hi2";

export function Navigation() {
  const isLoggedIn = true; // TODO: Replace with actual auth state

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
              className="rounded-full"
            />
            <span className="text-lg font-medium">Good afternoon, Rihito</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
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
                <DropdownMenuItem> <Link className="w-full" href="/dashboard">Dashboard</Link></DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Login />
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
