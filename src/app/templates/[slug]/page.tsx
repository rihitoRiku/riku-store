"use client";
import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CardRadioButton from "@/components/ui/card-radio-button";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const allProducts = [
  {
    id: 0,
    title: "Company Profile Template",
    price: 20,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/1.png",
  },
  {
    id: 1,
    title: "Professional Resume",
    price: 15,
    sold: 16,
    category: "Digital Resume",
    image: "/assets/portfolio/2.png",
  },
  {
    id: 2,
    title: "Social Media LinkTree",
    price: 10,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/3.png",
  },
  {
    id: 3,
    title: "Corporate Branding Kit",
    price: 35,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/4.png",
  },
  {
    id: 4,
    title: "Creative CV Template",
    price: 18,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/5.png",
  },
  {
    id: 5,
    title: "Business Card Design",
    price: 8,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/6.png",
  },
  {
    id: 6,
    title: "Developer Portfolio",
    price: 25,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/7.png",
  },
  {
    id: 7,
    title: "Social Media Bundle",
    price: 30,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/8.png",
  },
  {
    id: 8,
    title: "Startup Pitch Deck",
    price: 45,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/9.png",
  },
  {
    id: 9,
    title: "Academic CV",
    price: 12,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/10.png",
  },
  {
    id: 10,
    title: "Instagram Link Page",
    price: 7,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/11.png",
  },
  {
    id: 11,
    title: "Annual Report Template",
    price: 40,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/12.png",
  },
  {
    id: 12,
    title: "Creative Portfolio",
    price: 22,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/13.png",
  },
  {
    id: 13,
    title: "YouTube Channel Links",
    price: 9,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/14.png",
  },
  {
    id: 14,
    title: "Corporate Identity Package",
    price: 55,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/15.png",
  },
  {
    id: 15,
    title: "Job Application Bundle",
    price: 19,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/16.png",
  },
  {
    id: 16,
    title: "Artist LinkTree",
    price: 11,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/17.png",
  },
  {
    id: 17,
    title: "Small Business Package",
    price: 29,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/18.png",
  },
  {
    id: 18,
    title: "Visual Resume",
    price: 16,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/19.png",
  },
  {
    id: 19,
    title: "Podcast Links Page",
    price: 10,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/20.png",
  },
];

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Retrieve the product id from the URL slug.
  const { slug } = use(params);
  const productId = parseInt(slug);

  return (
    <div>
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-2 py-6 lg:px-4 lg:py-8">
        <Link href="/templates" className="mb-6 ms-2 flex items-center gap-2">
          <FaArrowLeft />
          <span>Back to Catalog</span>
        </Link>
        <section className="flex w-full flex-col rounded-lg p-4">
          <p className="mb-8 text-3xl">{allProducts[productId].title}</p>
          <div className="flex flex-col justify-between md:flex-row md:gap-8">
            <div className="flex max-w-[44rem] flex-col gap-4">
              <div className="relative min-h-[20rem] w-full rounded-2xl border dark:border-dark-neutral"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                itaque saepe, sit adipisci sunt laborum? Tempora, magnam!
                Tempore, quae ipsum.
              </p>
              <div className="relative min-h-[20rem] w-full rounded-2xl border dark:border-dark-neutral"></div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident, itaque. Perspiciatis unde officia obcaecati quaerat est
              atque tempora natus expedita. Delectus repellendus assumenda non
              optio!
            </div>
            <div className="mt-6 w-full max-w-[24rem] md:mt-0">
              <div className="mt-1 flex justify-between gap-4 md:flex-col">
                <p className="mt-4 text-4xl md:mt-0">${allProducts[productId].price}</p>
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-green-500" />
                  <span>Sold: {allProducts[productId].sold}</span>
                </div>
              </div>
              <div className="mt-6">
                <p>Notes</p>
                <Textarea
                  className="mt-2 h-32 max-h-40 max-w-[20rem] shadow-none dark:border-dark-neutral"
                  placeholder="add notes to seller.."
                />
              </div>
              <Button className="mt-4 flex justify-start rounded-none bg-green-400 px-6 py-8 shadow-none dark:bg-green-400 dark:text-custom-dark">
                <FaShoppingBag className="text-2xl" />
                <span className="mt-1 text-lg font-light">Order Now</span>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
