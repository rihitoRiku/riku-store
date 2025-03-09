"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { OtpDialog } from "./otp-dialog";

const formSchema = z.object({
  nickname: z.string().min(2, "Nickname must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function Register({
  onSwitchToLogin,
  onClose,
}: {
  onSwitchToLogin: () => void;
  onClose: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpDialog, setShowOtpDialog] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setShowOtpDialog(true);
  }

  return (
    <>
      {!showOtpDialog && (
        <Dialog
          open={true}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              onClose();
            }
          }}
        >
          <DialogContent
            className="max-w-[28rem] rounded-lg border-none bg-custom-cream dark:bg-custom-dark"
            onInteractOutside={() => {
              onClose();
              return false;
            }}
          >
            <DialogHeader>
              <DialogTitle className="text-3xl">Create new account</DialogTitle>
            </DialogHeader>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 space-y-4"
            >
              <div className="">
                <Label className="text-lg" htmlFor="nickname">
                  Nickname
                </Label>
                <Input
                  id="nickname"
                  placeholder="Your nickname"
                  className="border py-5 dark:border-zinc-800"
                  {...form.register("nickname")}
                />
                {form.formState.errors.nickname && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.nickname.message}
                  </p>
                )}
              </div>

              <div className="">
                <Label className="text-lg" htmlFor="email">
                  Email
                </Label>
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

              <div className="">
                <Label className="text-lg" htmlFor="password">
                  Password
                </Label>
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
                <Button
                  size={"lg"}
                  type="submit"
                  className="w-full bg-neutral-200"
                >
                  Register
                </Button>
              </div>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    onSwitchToLogin();
                  }}
                >
                  Login here
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {showOtpDialog && (
        <OtpDialog
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              onClose();
            }
            setShowOtpDialog(open);
          }}
        />
      )}
    </>
  );
}
