"use client";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* Carousel Section */}
      <div className="mb-12">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <div className="bg-custom-cream dark:bg-zinc-800 relative aspect-video overflow-hidden rounded-lg">
                    {/* <Image
                      src={`/carousel-${index + 1}.jpg`}
                      alt={`Carousel Image ${index + 1}`}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Product Grid Section */}
      <p className="text-2xl mb-4">Our Collection</p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
}
