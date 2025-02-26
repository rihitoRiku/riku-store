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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      {/* Landing Page */}
      <div className="mb-8 min-h-[75vh] pt-28 text-center font-inter">
        <h1 className="text-4xl md:text-5xl">
          We'll build your small business website with lovely design and
          afforable price
        </h1>
      </div>

      {/* Carousel Section */}
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
              <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
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

      {/* Description Section */}
      <div className="mb-24">
        {/* <div className="mb-8 text-center font-inter">
          <h1 className="text-3xl">What do We Offer?</h1>
        </div> */}
        <div className="flex flex-col gap-8 rounded-3xl p-0 md:bg-custom-cream md:p-8 md:dark:bg-neutral-900 lg:flex-row">
          <div className="grid max-h-[32rem] min-h-[26rem] w-full grid-cols-2 md:aspect-[4/3] md:gap-4">
            <div className="row-span-2 border-r bg-white p-4 dark:border-green-200 dark:bg-[#121212] md:rounded-2xl md:bg-white md:p-6 md:dark:border-none md:dark:bg-neutral-800">
              <h3 className="mb-2 text-3xl font-medium md:text-4xl">
                Build Your Website
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                amet nihil nemo voluptatem accusamus fugit!
              </p>
            </div>
            <div className="border-b bg-white p-4 dark:border-green-200 dark:bg-[#121212] md:rounded-2xl md:bg-white md:p-6 md:dark:border-none md:dark:bg-neutral-800">
              <h3 className="mb-2 text-lg font-medium md:text-2xl">
                Digital Products
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat unde, saepe iste nostrum dolor assumenda!
              </p>
            </div>
            <div className="bg-white p-4 dark:bg-[#121212] md:rounded-2xl md:bg-white md:p-6 md:dark:bg-neutral-800">
              <h3 className="mb-2 text-lg font-medium md:text-2xl">
                Other Goods
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                ipsum enim perferendis?
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
      </div>

      {/* Cards Section */}
      <div className="mb-20 min-h-screen text-center font-inter">
        <h1 className="mb-8 text-3xl md:mb-12 md:text-4xl">
          Choose Your Website Plan
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 px-8 md:flex-row md:px-0 lg:gap-8">
          <Card className="flex min-h-[24rem] w-full flex-col justify-between rounded-2xl border-green-200 bg-custom-cream shadow-none dark:border-green-200 dark:bg-neutral-900 md:max-w-[20rem]">
            <CardHeader>
              <CardTitle className="text-2xl">Basic Growth</CardTitle>
              <CardDescription>
                Rekomendasi untuk UMKM/Yayasan yang baru memulai Go-Digital
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <Button className="h-12 w-full rounded-xl border border-none bg-white shadow-none dark:border-green-400">
                Order Now
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex min-h-[24rem] w-full flex-col justify-between rounded-2xl shadow-none dark:border-custom-secdark dark:bg-neutral-900 md:max-w-[20rem]">
            <CardHeader>
              <CardTitle className="text-2xl">Premium-Plus</CardTitle>
              <CardDescription>
                Rekomendasi untuk UMKM/Yayasan yang baru memulai Go-Digital
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <Button className="h-12 w-full rounded-xl border dark:border-none shadow-none dark:border-custom-secdark">
                Order Now
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex min-h-[24rem] w-full flex-col justify-between rounded-2xl shadow-none dark:border-custom-secdark dark:bg-neutral-900 md:max-w-[20rem]">
            <CardHeader>
              <CardTitle className="text-2xl">Entahusiast</CardTitle>
              <CardDescription>
                Rekomendasi untuk UMKM/Yayasan yang baru memulai Go-Digital
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
              <Button className="h-12 w-full rounded-xl border dark:border-none shadow-none dark:border-custom-secdark">
                Order Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* <h3 className="text-xl md:text-2xl">Portfolio Collection</h3> */}
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

      <div className="mb-12 text-center font-inter">
        <h1 className="text-2xl lg:text-3xl">Testimonials</h1>
      </div>
    </div>
  );
}
