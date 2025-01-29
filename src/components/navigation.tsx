"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiShoppingCart } from "react-icons/hi2";
import { ModeToggle } from "@/components/darkmode-toggle";
import { Login } from "./login";
import Link from "next/link";

export function Navigation() {
  const isLoggedIn = false; // TODO: Replace with actual auth state

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
                    <AvatarImage src="/avatar.png" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-32 bg-custom-light dark:border-none dark:bg-custom-dark"
                align="end"
                forceMount
              >
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
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
