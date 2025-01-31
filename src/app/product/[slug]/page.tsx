"use client";
import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CardRadioButton from "@/components/ui/card-radio-button";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Heart, ShoppingCart } from "lucide-react";

const dummyProducts = [
  {
    id: 0,
    title: "Brown Accent Men",
    price: 19.99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe animi porro pariatur. Cum nisi laboriosam sed molestiae tenetur corrupti explicabo tempora, quos quod. Rerum ipsum esse velit! Ea, fugiat quibusdam.",
    image: "/assets/items/1.jpg",
    sold: 25,
    likes: 421,
  },
  {
    id: 1,
    title: "White V Model",
    price: 19.99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe animi porro pariatur. Cum nisi laboriosam sed molestiae tenetur corrupti explicabo tempora, quos quod. Rerum ipsum esse velit! Ea, fugiat quibusdam.",
    image: "/assets/items/2.jpg",
    sold: 12,
    likes: 306,
  },
  {
    id: 2,
    title: "Sweater",
    price: 19.99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe animi porro pariatur. Cum nisi laboriosam sed molestiae tenetur corrupti explicabo tempora, quos quod. Rerum ipsum esse velit! Ea, fugiat quibusdam.",
    image: "/assets/items/3.jpg",
    sold: 300,
    likes: 1250,
  },
  {
    id: 3,
    title: "Hoodie",
    price: 19.99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe animi porro pariatur. Cum nisi laboriosam sed molestiae tenetur corrupti explicabo tempora, quos quod. Rerum ipsum esse velit! Ea, fugiat quibusdam.",
    image: "/assets/items/4.jpg",
    sold: 36,
    likes: 886,
  },
];

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  // Convert slug to number
  const productId = parseInt(slug);

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
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start gap-8 px-4 py-8 lg:flex-row lg:gap-12">
        <div className="w-full">
          <Link href="/" className="flex items-center gap-2">
            <FaArrowLeft />
            <span>Back to Catalog</span>
          </Link>
          <div className="mt-6 flex max-h-[32rem] w-full gap-4 rounded-lg dark:border-zinc-700">
            <div className="relative aspect-[3/4] w-full max-w-[24rem]">
              <Image
                src={dummyProducts[productId].image}
                fill
                alt="product-image"
                className="rounded-l-lg object-contain"
              />
            </div>
            <div className="w-[6rem] space-y-4">
              <div className="aspect-square w-full border dark:border-zinc-700"></div>
              <div className="aspect-square w-full border dark:border-zinc-700"></div>
              <div className="aspect-square w-full border dark:border-zinc-700"></div>
            </div>
          </div>
          <div className="mt-6 w-full min-w-[24rem] lg:hidden">
            <p className="text-3xl">{dummyProducts[productId].title}</p>
            <div className="mt-1 flex gap-8">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Likes: {dummyProducts[productId].likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-green-500" />
                <span>Sold: {dummyProducts[productId].sold}</span>
              </div>
            </div>
            <p className="mt-4 text-2xl">$19.99 - $24.99</p>
            <Button className="mt-4 flex justify-start rounded-none bg-green-400 px-6 py-8 shadow-none dark:bg-green-400 dark:text-custom-dark lg:hidden">
              <FaShoppingBag className="text-2xl" />
              <span className="mt-1 text-lg font-light">Order Now</span>
            </Button>
          </div>

          <div className="mt-6">
            <p className="text-lg">Description</p>
            <p>{dummyProducts[productId].description}</p>
          </div>
        </div>

        <div className="w-[32rem]">
          <div className="hidden lg:block">
            <p className="text-3xl">{dummyProducts[productId].title}</p>
            <div className="mt-1 flex gap-8">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Likes: {dummyProducts[productId].likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-green-500" />
                <span>Sold: {dummyProducts[productId].sold}</span>
              </div>
            </div>
            <p className="mt-4 text-2xl">{dummyProducts[productId].title}</p>
          </div>
          <Button className="mt-4 hidden justify-start rounded-none bg-green-400 px-6 py-8 shadow-none dark:bg-green-400 dark:text-custom-dark lg:flex">
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
                className="w-16 shadow-none dark:border-zinc-700"
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
              className="mt-2 h-32 max-h-40 max-w-[20rem] shadow-none dark:border-zinc-700"
              placeholder="add notes to seller.."
            />
          </div>
          <div className="mt-6">Payment</div>
        </div>
      </div>
    </div>
  );
}
