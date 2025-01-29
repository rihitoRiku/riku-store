"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CardRadioButton from "@/components/ui/card-radio-button";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { FaShoppingBag } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface ProductQuery {
  title?: string;
  description?: string;
  image?: string;
  sold?: string;
  likes?: string;
}

export default function ProductDetail() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const description = searchParams.get("description") || "";
  const image = searchParams.get("image") || "";
  const sold = searchParams.get("sold") || "0";
  const likes = searchParams.get("likes") || "0";

  const options = [
    { id: 1, label: "L" },
    { id: 2, label: "XL" },
    { id: 3, label: "XXL" },
  ];

  const handleSelectionChange = (selectedId: number) => {
    console.log("Selected:", selectedId);
  };

  return (
    <div>
      {/*<h1>{title}</h1>
       <Image src={image} alt={title} fill className="object-cover" /> 
      <p>{description}</p>
      <p>{sold} sold</p>
      <p>{likes} likes</p>*/}
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start gap-8 px-4 py-8 lg:flex-row lg:gap-12">
        <div className="">
          <Link href="/" className="flex items-center gap-2">
            <FaArrowLeft />
            <span>Back to Catalog</span>
          </Link>
          <div className="mt-6 h-[32rem] w-full rounded-lg border dark:border-zinc-700"></div>
          <div className="mt-6 w-full min-w-[24rem] lg:hidden">
            <p className="text-3xl">Hoodie Premium</p>
            <div className="mt-1 flex gap-8">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Likes: 600</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-green-500" />
                <span>Sold: 30</span>
              </div>
            </div>
            <p className="mt-4 text-2xl">$19.99 - $24.99</p>
            <Button className="mt-4 flex justify-start rounded-none bg-green-400 py-8 px-6 shadow-none dark:bg-green-400 dark:text-custom-dark lg:hidden">
              <FaShoppingBag className="text-2xl" />
              <span className="mt-1 text-lg font-light">Order Now</span>
            </Button>
          </div>

          <div className="mt-6">
            <p className="text-lg">Description</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
              perspiciatis atque nemo illum officia labore, dolorum aliquid
              magni amet? Obcaecati optio voluptatum omnis ad et at! Autem optio
              minima quisquam quo, facere perspiciatis asperiores repudiandae
              magnam beatae architecto atque repellat numquam corrupti
              accusantium mollitia et suscipit deserunt odio distinctio sit!
            </p>
          </div>
        </div>

        <div className="w-full min-w-[24rem]">
          <div className="hidden lg:block">
            <p className="text-3xl">Hoodie Premium</p>
            <div className="mt-1 flex gap-8">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Likes: 600</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-green-500" />
                <span>Sold: 30</span>
              </div>
            </div>
            <p className="mt-4 text-2xl">$19.99 - $24.99</p>
          </div>
          <Button className="mt-4 hidden justify-start rounded-none bg-green-400 py-8 px-6 shadow-none dark:bg-green-400 dark:text-custom-dark lg:flex">
            <FaShoppingBag className="text-2xl" />
            <span className="mt-1 text-lg font-light">Order Now</span>
          </Button>

          <div className="lg:mt-6">
            <p className="mb-2">Variant</p>
            <CardRadioButton
              options={options}
              name="options"
              onChange={handleSelectionChange}
            />
          </div>
          <div className="mt-6">
            <div className="flex w-full max-w-sm flex-col space-y-2">
              <p className="">Quantity</p>
              <Input
                className="w-16 dark:border-zinc-700"
                type="number"
                id="quantity"
                defaultValue="1"
                min="1"
                max="99"
              />
            </div>
          </div>
          <div className="mt-6">
            <p>Notes</p>
            <Textarea
              className="mt-2 h-32 max-h-40 max-w-[20rem] dark:border-zinc-700"
              placeholder="add notes to seller.."
            />
          </div>
          <div className="mt-6">Payment</div>
        </div>
      </div>
    </div>
  );
}
