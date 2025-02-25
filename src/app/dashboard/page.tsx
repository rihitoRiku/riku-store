"use client"
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { showToast } from "@/lib/utils/toast";
import { supabase } from "./../../lib/supabaseClient";

export default function page() {
  const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      // console.log("Dashboard session:", data.session);

      if (error || !data.session) {
        // console.error("No session, redirecting to login");
        showToast.error("Login first, please!")
        
        router.push("/");
        return;
      }

      // console.log("User:", data.session.user);
    };
    checkSession();
  }, [router]);
  return (
    <>
      <div className="container mx-auto flex max-w-screen-md flex-col items-start justify-start gap-8 lg:px-4 lg:py-8 px-2 py-6">
        <Link href="/" className="flex items-center gap-2 ms-2">
          <FaArrowLeft />
          <span>Back to Catalog</span>
        </Link>
        <div className=""></div>
        <div className="flex w-full flex-col rounded-lg p-4">
          <div className="flex gap-4">
            <Avatar className="size-20">
              <AvatarImage src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Jade" />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <div className="">
              <p className="text-xl">Rihito Kun</p>
              <p className="text-sm">muhammadrafishidiq@gmail.com</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p>
              Address: <br />{" "}
              <span className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                omnis cupiditate.
              </span>
            </p>
            <p>
              Phone number: <span className="text-sm">+6289655602145</span>
            </p>
          </div>
        </div>
        <div className="w-full rounded-lg p-2 md:p-3">
          <p>Order Stats</p>
          <div className="mt-4 flex items-center justify-center md:gap-4 gap-3">
            <div className="flex w-fit flex-col items-center justify-center gap-1 rounded-md border p-2 md:p-4">
              <p className="text-sm md:text-base">Pending</p>
              <span className="text-2xl">0</span>
            </div>
            <div className="flex w-fit flex-col items-center justify-center gap-1 rounded-md border p-2 md:p-4">
              <p className="text-sm md:text-base">Shipping</p>
              <span className="text-2xl">0</span>
            </div>
            <div className="flex w-fit flex-col items-center justify-center gap-1 rounded-md border p-2 md:p-4">
              <p className="text-sm md:text-base">Complete</p>
              <span className="text-2xl">0</span>
            </div>
            <div className="flex w-fit flex-col items-center justify-center gap-1 rounded-md border p-2 md:p-4">
              <p className="text-sm md:text-base">Canceled</p>
              <span className="text-2xl">0</span>
            </div>
          </div>
        </div>
        <div className="h-[24rem] w-full rounded-lg  p-2 md:p-3">
          <p>Purchase History</p>{" "}
          <div className="mt-4">
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[15rem]">Item</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="">Amount</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Hoodie A</TableCell>
                  <TableCell>Success</TableCell>
                  <TableCell className="">$250.00</TableCell>
                  <TableCell className="text-right">12/3/24</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
