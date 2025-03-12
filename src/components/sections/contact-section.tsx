"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { showToast } from "@/lib/utils/toast";
import { Button } from "@/components/ui/button";
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
import { BlurFade } from "@/components/magicui/blur-fade";

const FormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    showToast.error("Login first, please!");
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-screen-lg px-4 py-6 text-center sm:px-4"
    >
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
          <div className="aspect-[2/1] max-h-[24rem] rounded-2xl border dark:border-neutral-800 md:aspect-auto md:flex-[3]" />
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
                  className="self-start rounded-xl border dark:border-dark-neutral dark:bg-zinc-900"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
