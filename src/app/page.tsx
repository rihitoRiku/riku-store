"use client";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* Carousel Section */}
      <div className="mb-8">
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
              <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                <div className="p-1">
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-custom-cream dark:bg-zinc-800">
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

      {/* Description Section */}
      <div className="mb-8 text-center font-inter">
        <h1 className="text-3xl">What do We Offer?</h1>
      </div>
      <div className="flex md:flex-row flex-col lg:flex-row gap-8 mb-12">
        <div className=" grid md:aspect-[4/3] min-h-[24rem] w-full max-h-[28rem] gap-4 grid-cols-2">
          <div className="rounded-lg bg-custom-cream p-4 dark:bg-zinc-800 row-span-2">
            <h3 className="mb-2 text-lg sm:text-3xl font-semibold">Build Your Website</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet nihil nemo voluptatem accusamus fugit!
            </p>
          </div>
          <div className="rounded-lg bg-custom-cream p-4 dark:bg-zinc-800">
            <h3 className="mb-2 text-lg sm:text-2xl font-semibold">Digital Products</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat unde, saepe iste nostrum dolor assumenda!
            </p>
          </div>
          <div className="rounded-lg bg-custom-cream p-4 dark:bg-zinc-800">
            <h3 className="mb-2 text-lg sm:text-2xl font-semibold">Other Goods</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum enim perferendis?
            </p>
          </div>
        </div>
        <div className="max-w-[32rem]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut non
            quaerat ut, aliquid perspiciatis fugiat velit vel tempore nulla
            accusamus.
          </p>
        </div>
      </div>

      {/* Product Grid Section */}
      <p className="mb-4 text-2xl">Our Collection</p>
      <div className="mb-12 grid grid-cols-3 gap-4 sm:grid-cols-5 md:gap-6 lg:grid-cols-6">
        {dummyProducts.map((product) => (
          <Link
            key={product.id}
            href={{
              pathname: `/product/${product.id}`,
            }}
            passHref
          >
            <ProductCard
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              sold={product.sold}
              likes={product.likes}
            />
          </Link>
        ))}
      </div>

      <div className="mb-12 text-center font-inter">
        <h1 className="text-2xl lg:text-3xl">Why Choose Us?</h1>
      </div>
    </div>
  );
}
