"use client";
import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

import { Register } from "./register";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "./loader";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { LogIn } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoginOpen(false);
    setIsLoading(true);
    try {
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/auth/callback", // Next.js callback
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      setIsLoading(false);
      console.log("OAuth initiated:", { error, data });
      if (error) throw error;
    } catch (err) {
      setIsLoading(false);
      console.error("Login error:", err);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleOpenRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Button
        variant="default"
        className="rounded-2xl bg-custom-cream text-black shadow-none dark:bg-green-400 md:px-8 md:py-6 md:text-lg"
        onClick={() => setIsLoginOpen(true)}
      >
        <LogIn size={20} />
        Login
      </Button>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="max-w-[28rem] rounded-lg border-none bg-custom-cream dark:bg-custom-dark">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Login to your account
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="email@example.com"
                className="border py-5 dark:border-zinc-800"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="border py-5 dark:border-zinc-800"
                  {...form.register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground absolute right-2 top-3"
                >
                  {showPassword ? (
                    <HiEye className="h-5 w-5" />
                  ) : (
                    <HiEyeSlash className="h-5 w-5" />
                  )}
                </button>
              </div>
              {form.formState.errors.password && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2 pt-4">
              <Button type="submit" className="w-full">
                Login
              </Button>

              <Button
                type="button"
                className="w-full"
                onClick={handleOpenRegister}
              >
                Register
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="text-muted-foreground bg-custom-cream px-4 dark:bg-custom-dark">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              onClick={handleGoogleLogin}
              className="w-full"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Google
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {isRegisterOpen && (
        <Register
          onSwitchToLogin={handleSwitchToLogin}
          onClose={() => setIsRegisterOpen(false)}
        />
      )}
    </>
  );
}
