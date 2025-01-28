"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CardRadioButton from "@/components/ui/card-radio-button";

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
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start gap-8 px-4 py-8 lg:flex-row lg:gap-16">
        <div className="">
          <div className="h-[32rem] w-full rounded-lg border dark:border-zinc-700"></div>
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

        <div className="w-full min-w-[28rem]">
          <p className="text-3xl">Hoodie Premium</p>
          <div className="mt-1 flex gap-8">
            <p>Total Likes: 600</p>
            <p>50 (sold)</p>
          </div>
          <p className="mt-4 text-2xl">$19.99 - $24.99</p>
          <div className="mt-6">
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
            <Textarea className="mt-2 max-h-24 max-w-[20rem] border-zinc-700" />
          </div>
          <div className="mt-6">Payment</div>
        </div>
      </div>
    </div>
  );
}
