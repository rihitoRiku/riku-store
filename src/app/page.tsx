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
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { RainbowButton } from "@/components/magicui/rainbow-button";

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

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const images = Array.from({ length: 8 }, (_, i) => {
  const width = Math.floor(Math.random() * (1000 - 600 + 1)) + 600;
  const height = Math.floor(Math.random() * (width - 400 + 1)) + 400;
  return `/assets/webdesign/${i + 1}.png`;
});

export default function Home() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* Landing Page */}
      <div className="mb-8 min-h-[44rem] pt-28 text-center font-inter text-3xl sm:text-4xl md:text-5xl">
        <TextAnimate className="mb-24" animation="slideUp" by="word" once>
          We'll build your small business website with lovely design and
          afforable price
        </TextAnimate>
        <RainbowButton className="text-sm text-white dark:text-black md:py-6 md:text-lg">
          Lets Get Started
        </RainbowButton>
      </div>

      {/* Carousel Section */}
      {/* <div className="mb-16">
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
      </div> */}

      {/* Description Section */}
      <div className="mb-24">
        <div className="mb-6 text-center font-inter">
          {/* <h1 className="text-3xl">What do We Offer?</h1> */}
        </div>
        <div className="flex flex-col gap-8 rounded-3xl p-0 md:bg-custom-cream md:p-8 md:dark:bg-neutral-900 lg:flex-row">
          <div className="order-2 grid max-h-[32rem] min-h-[26rem] w-full grid-cols-2 md:order-1 md:aspect-[4/3] md:gap-4">
            <div className="row-span-2 border-r bg-white p-4 dark:border-green-200 dark:bg-[#121212] md:rounded-2xl md:bg-white md:p-6 md:dark:border-none md:dark:bg-neutral-800">
              <h3 className="mb-2 md:mb-6 text-3xl font-medium md:text-4xl">
                Full Coding with Latest Tech
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                amet nihil nemo voluptatem accusamus fugit!
              </p>
            </div>
            <div className="border-b bg-white p-4 dark:border-green-200 dark:bg-[#121212] md:rounded-2xl md:bg-white md:p-6 md:dark:border-none md:dark:bg-neutral-800">
              <h3 className="mb-2 md:mb-6 text-lg font-medium md:text-2xl">
                Modern Trendy Design
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat unde, saepe iste nostrum dolor assumenda!
              </p>
            </div>
            <div className="bg-white p-4 dark:bg-[#121212] md:rounded-2xl md:bg-white md:p-6 md:dark:bg-neutral-800">
              <h3 className="mb-2 md:mb-6 text-lg font-medium md:text-2xl">Special Price!</h3>
              <p className="text-sm">
                Get a special discount by bringing your website project to us
                during our early launch!
              </p>
            </div>
          </div>
          <div className="order-1 w-full text-center text-lg md:order-2 lg:max-w-[32rem]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut non
              quaerat ut, aliquid perspiciatis fugiat velit vel tempore nulla
              accusamus.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Plans Section */}
      <div className="mb-20 text-center font-inter">
        <h1 className="mb-8 text-3xl md:mb-12 md:text-4xl">
          Choose Your Website Plan
        </h1>
        <div className="mx-auto mb-12 flex max-w-screen-lg flex-wrap gap-4">
          <div className="flex min-w-64 flex-1 basis-64 items-center justify-center rounded sm:justify-end">
            <Card className="flex min-h-[24rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl border-green-200 bg-custom-cream shadow-none dark:border-green-200 dark:bg-neutral-900 md:w-full lg:max-w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Basic Growth</CardTitle>
                <CardDescription>
                  Cocok untuk website personal dengan konten yang tidak terlalu banyak
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <Button className="h-12 w-full rounded-xl border bg-white text-2xl shadow-none dark:border-none dark:border-custom-secdark">
                  $25
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex min-w-64 flex-1 basis-64 items-center justify-center rounded sm:justify-start">
            <Card className="flex min-h-[24rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl shadow-none dark:border-custom-secdark dark:bg-neutral-900 md:w-full lg:max-w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Premium-Plus</CardTitle>
                <CardDescription>
                  Ideal untuk profil perusahaan yang ingin memperkenalkan bisnis dan produknya
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <Button className="h-12 w-full rounded-xl border text-xl shadow-none dark:border-none dark:border-custom-secdark">
                  $50
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex min-w-64 flex-1 basis-64 items-center justify-center rounded">
            <Card className="flex min-h-[24rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl shadow-none dark:border-custom-secdark dark:bg-neutral-900 md:w-full lg:max-w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Entahusiast</CardTitle>
                <CardDescription>Wujudkan website impianmu dengan dukungan berbagai fitur menarik</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <Button className="h-12 w-full rounded-xl border text-xl shadow-none dark:border-none dark:border-custom-secdark">
                  $100
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Instant Package Sections */}
        <h1 className="mb-8 text-xl md:mb-12 md:text-2xl">
          or instant package plan?
        </h1>
        <section id="photos">
          <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
            {images.map((imageUrl, idx) => (
              <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                <img
                  className="mb-4 size-full rounded-2xl object-contain"
                  src={imageUrl}
                  alt={`Random stock image ${idx + 1}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>

      {/* Product Grid Section */}
      <p className="mb-6 text-2xl md:mb-8">Our Collection</p>
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
        <h1 className="mb-6 text-2xl md:mb-8 lg:text-3xl">Why Choose Us?</h1>
      </div>

      <div className="mb-12 text-center font-inter">
        <h1 className="mb-6 text-2xl md:mb-8 lg:text-3xl">Testimonials</h1>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </div>
  );
}
