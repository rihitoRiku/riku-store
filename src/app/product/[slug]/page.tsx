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

// Updated dummyProducts with a "variants" property for each product.
const dummyProducts = [
  {
    id: 0,
    title: "Brown Accent Men",
    price: 19.99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe animi porro pariatur...",
    image: "/assets/items/1.jpg",
    sold: 25,
    likes: 421,
    variants: ["/assets/items/1.jpg"],
  },
  {
    id: 1,
    title: "White V Model",
    price: 19.99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe animi porro pariatur...",
    image: "/assets/items/2.jpg",
    sold: 12,
    likes: 306,
    variants: [
      "/assets/items/2.jpg",
      "/assets/items/3.jpg",
      "/assets/items/1.jpg",
    ],
  },
  {
    id: 2,
    title: "Sweater",
    price: 19.99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe animi porro pariatur...",
    image: "/assets/items/3.jpg",
    sold: 300,
    likes: 1250,
    variants: ["/assets/items/3.jpg"],
  },
  {
    id: 3,
    title: "Hoodie",
    price: 19.99,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe animi porro pariatur...",
    image: "/assets/items/4.jpg",
    sold: 36,
    likes: 886,
    variants: ["/assets/items/4.jpg"],
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
  const product = dummyProducts[productId];

  // State to hold the current main image (initialized with the default product image)
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Determine the index of the current image in the variants array.
  const currentIndex =
    product.variants?.findIndex((v) => v === selectedImage) ?? 0;
  const effectiveIndex = currentIndex === -1 ? 0 : currentIndex;

  // Function to go to the previous image. Wraps around if necessary.
  const handlePrev = () => {
    if (!product.variants) return;
    let newIndex = effectiveIndex - 1;
    if (newIndex < 0) {
      newIndex = product.variants.length - 1;
    }
    setSelectedImage(product.variants[newIndex]);
  };

  // Function to go to the next image. Wraps around if necessary.
  const handleNext = () => {
    if (!product.variants) return;
    let newIndex = effectiveIndex + 1;
    if (newIndex >= product.variants.length) {
      newIndex = 0;
    }
    setSelectedImage(product.variants[newIndex]);
  };

  const options = [
    { id: 1, label: "L" },
    { id: 2, label: "XL" },
    { id: 3, label: "XXL" },
  ];

  const handleSelectionChange = (selectedId: number) => {
    console.log("Selected variant option:", selectedId);
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
            {/* Main Image Display with Left/Right Navigation Buttons */}
            <div className="relative aspect-[3/4] w-full max-w-[24rem]">
              <Image
                src={selectedImage}
                fill
                alt="product-image"
                className="rounded-l-lg object-contain"
              />
              {product.variants?.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/50 p-2 hover:bg-white"
                  >
                    <ChevronLeft className="h-6 w-6 text-black" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/50 p-2 hover:bg-white"
                  >
                    <ChevronRight className="h-6 w-6 text-black" />
                  </button>
                </>
              )}
            </div>
            {/* Variant Thumbnail Gallery */}
            <div className="w-[6rem] space-y-4">
              {product.variants?.length > 1 && (
                <div className="w-[6rem] space-y-4">
                  {product.variants.map((variantSrc, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(variantSrc)}
                      className="relative aspect-square w-full cursor-pointer border dark:border-zinc-700"
                    >
                      <Image
                        src={variantSrc}
                        fill
                        alt={`variant-${index}`}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Mobile view details */}
          <div className="mt-6 w-full min-w-[24rem] lg:hidden">
            <p className="text-3xl">{product.title}</p>
            <div className="mt-1 flex gap-8">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Likes: {product.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-green-500" />
                <span>Sold: {product.sold}</span>
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
            <p>{product.description}</p>
          </div>
        </div>
        <div className="w-full lg:w-[32rem]">
          <div className="hidden lg:block">
            <p className="text-3xl">{product.title}</p>
            <div className="mt-1 flex gap-8">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Likes: {product.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-green-500" />
                <span>Sold: {product.sold}</span>
              </div>
            </div>
            <p className="mt-4 text-2xl">${product.price}</p>
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
              <p>Quantity</p>
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
          {/* <div className="mt-6">Payment</div> */}
        </div>
      </div>
    </div>
  );
}
