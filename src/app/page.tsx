"use client";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for Product 1",
    image: "/product1.jpg",
    sold: 500,
    likes: 1200,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for Product 2",
    image: "/product2.jpg",
    sold: 300,
    likes: 800,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for Product 3",
    image: "/product3.jpg",
    sold: 450,
    likes: 900,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for Product 4",
    image: "/product4.jpg",
    sold: 600,
    likes: 1500,
  },
];

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
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-custom-cream dark:bg-zinc-800">
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
      <p className="mb-4 text-2xl">Our Collection</p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {dummyProducts.map((product) => (
          <Link 
            key={product.id} 
            href={{
              pathname: `/product/${product.id}`,
              query: { 
                title: product.title, 
                description: product.description, 
                image: product.image, 
                sold: product.sold, 
                likes: product.likes 
              }
            }} 
            passHref
          >
            <ProductCard 
              title={product.title} 
              description={product.description} 
              image={product.image} 
              sold={product.sold} 
              likes={product.likes} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
