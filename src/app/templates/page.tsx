"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { showToast } from "@/lib/utils/toast";
import Autoplay from "embla-carousel-autoplay";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BlurFade } from "@/components/magicui/blur-fade";

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

export default function page() {
  return (
    <>
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-2 py-6 lg:px-4 lg:py-8">
        <Link href="/" className="ms-2 flex items-center gap-2">
          <FaArrowLeft />
          <span>Back</span>
        </Link>
        <div className=""></div>
        <div className="flex w-full flex-col rounded-lg p-4">
          {/* Caraousel Section */}
          <div className="mb-16">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-2/3 lg:basis-1/2"
                  >
                    <div className="p-1">
                      <div className="relative aspect-video overflow-hidden rounded-2xl bg-custom-cream dark:bg-zinc-800">
                        <Image
                          src={`/assets/items/car-${index + 1}.jpg`}
                          alt={`Carousel Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          {/* Product Section */}
          <section className="mb-12">
            <p className="mb-6 text-2xl md:mb-8">Our Collection</p>
            <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
              {dummyProducts.map((product, idx) => (
                <BlurFade key={product.id} delay={0.25 + idx * 0.05} inView>
                  <Link
                    href={{
                      pathname: `/product/${product.id}`,
                    }}
                    passHref
                  >
                    <div className="mb-4 block rounded-2xl">
                      <ProductCard
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        sold={product.sold}
                        likes={product.likes}
                      />
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
