"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  sold: number;
  likes: number;
}

export function ProductCard({ title, description, image, sold, likes }: ProductCardProps) {
  return (
    <div className="bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden rounded-t-lg bg-custom-cream dark:bg-zinc-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-red-500" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4 text-green-500" />
            <span>{sold} sold</span>
          </div>
        </div>

        {/* <Button className="w-full mt-2">Add to Cart</Button> */}
      </div>
    </div>
  )
}
