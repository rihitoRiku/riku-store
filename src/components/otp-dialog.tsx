"use client";
import React, { useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./ui/input-otp";
import { DialogDescription } from "@radix-ui/react-dialog";

interface OtpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const OtpDialog = ({ open, onOpenChange }: OtpDialogProps) => {
  const [otp, setOtp] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-custom-cream dark:bg-custom-dark dark:border-none max-w-[24rem] text-center" aria-describedby="otp-description" preventClose disableClose>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Check Your Email!</DialogTitle>
        </DialogHeader>
        <p>
          Enter the 4-digit OTP verification code we have sent to your email
        </p>
        <div className="flex justify-center">
          <InputOTP maxLength={4} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              <InputOTPSlot className="dark:border-zinc-700" index={0} />
              <InputOTPSlot className="dark:border-zinc-700" index={1} />
              <InputOTPSlot className="dark:border-zinc-700" index={2} />
              <InputOTPSlot className="dark:border-zinc-700" index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </DialogContent>
    </Dialog>
  );
};
