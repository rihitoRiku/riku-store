"use client";

import { useState } from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showToast } from "@/lib/utils/toast";

const FormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessDialog = ({ open, onOpenChange }: SuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        disableClose
        className="max-w-[28rem] border-0 bg-custom-cream text-center shadow-none dark:bg-custom-dark"
        aria-describedby="success-description"
        // Remove disableClose prop completely
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Message Sent Successfully!
          </DialogTitle>
        </DialogHeader>
        <p className="text-gray-600 dark:text-gray-300">
          Thank you for reaching out! We've received your message and will get
          back to you ASAP
        </p>
        <DialogPrimitive.Close className="absolute focus:outline-none"></DialogPrimitive.Close>
      </DialogContent>
    </Dialog>
  );
};

export default function ContactSection() {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Show success dialog instead of toast
      setShowSuccessDialog(true);
      form.reset();
    } catch (error) {
      showToast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-screen-lg px-4 py-6 text-center sm:px-4"
    >
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="relative aspect-[2/1] max-h-[24rem] md:mt-8 md:aspect-auto md:flex-[3]">
            <Image
              src={"assets/contact.svg"}
              alt="contac-illustration"
              className="rounded-2xl bg-green-50 object-contain"
              fill
            />
          </div>
          <div className="md:flex-[2]">
            <h2 className="mb-4 text-start text-2xl md:mb-6 lg:text-3xl">
              Contact Us
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="text-start">
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          className="h-10 rounded-xl dark:border-zinc-800"
                          placeholder="shadcn"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="text-start">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="h-10 rounded-xl dark:border-zinc-800"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="text-start">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here..."
                          className="max-h-[120px] min-h-[120px] rounded-xl shadow-none dark:border-zinc-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="self-end rounded-xl border dark:border-dark-neutral dark:bg-zinc-900"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </BlurFade>
      <SuccessDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
      />
    </section>
  );
}
