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
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight, X } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import Timeline from "@/components/timeline";
import { Check } from "lucide-react";

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

const techstacks = [
  {
    alt: "React.js",
    img: "/assets/techstack/1.png",
  },
  {
    alt: "Next",
    img: "/assets/techstack/2.png",
  },
  {
    alt: "Tailwind CSS",
    img: "/assets/techstack/3.png",
  },
  {
    alt: "Node JS",
    img: "/assets/techstack/4.png",
  },
  {
    alt: "Shadcn",
    img: "/assets/techstack/7.png",
  },
  {
    alt: "Framer Motion",
    img: "/assets/techstack/8.png",
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
    <div className="container mx-auto max-w-screen-xl px-2 py-8 sm:px-4">
      {/* Landing Page */}
      <div className="mb-8 min-h-[44rem] pt-28 text-center font-inter text-3xl sm:text-4xl md:text-5xl">
        <div className="group relative mx-auto mb-6 flex w-[14rem] cursor-pointer items-center justify-center rounded-full px-4 py-1.5 text-xl shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] md:w-[16rem] md:text-lg">
          <span
            className={cn(
              "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-sm font-medium">
            In Development!
          </AnimatedGradientText>
          <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
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
      <div className="mb-12">
        <div className="mb-6 text-center font-inter">
          {/* <h1 className="text-3xl">What do We Offer?</h1> */}
        </div>
        <div className="flex flex-col gap-8 rounded-3xl p-0 dark:border-neutral-700 md:border md:p-8 md:dark:bg-neutral-900 lg:flex-row">
          <div className="order-2 grid max-h-[32rem] min-h-[26rem] w-full grid-cols-2 md:order-1 md:aspect-[4/3]">
            <div className="row-span-2 flex flex-col justify-center border-r bg-white p-4 dark:border-green-200 dark:bg-[#121212] md:bg-white md:p-6 md:dark:border-neutral-700 md:dark:bg-neutral-900">
              <h3 className="mb-2 text-3xl font-medium md:mb-6 md:text-4xl">
                Full Coding
              </h3>
              <p className="text-sm">
                We craft clean, efficient, and fully optimized code to ensure
                your website runs smoothly and delivers top-notch performance.
              </p>
            </div>
            <div className="border-b bg-white p-4 dark:border-green-200 dark:bg-[#121212] md:bg-white md:p-6 md:dark:border-neutral-700 md:dark:bg-neutral-900">
              <h3 className="mb-2 text-lg font-medium md:mb-6 md:text-2xl">
                Modern Trendy Design
              </h3>
              <p className="text-sm">
                Stay ahead of the curve with sleek, user-friendly, and visually
                stunning designs that align with the latest web trends.
              </p>
            </div>
            <div className="bg-white p-4 dark:bg-[#121212] md:bg-white md:p-6 md:dark:bg-neutral-900">
              <h3 className="mb-2 text-lg font-medium md:mb-6 md:text-2xl">
                Pixel Perfect
                {/* Special Offers! */}
              </h3>
              <p className="text-sm">
                Ensuring precise & high-quality designs that look flawless on
                any screen or device.
                {/* Get a special discount by bringing your website project to us
                during our early launch! */}
              </p>
            </div>
          </div>
          <div className="order-1 flex w-full flex-col justify-center text-center text-lg md:order-2 lg:max-w-[32rem]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut non
              quaerat ut, aliquid perspiciatis fugiat velit vel tempore nulla
              accusamus.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16 text-center font-inter">
        <h1 className="mb-2 text-2xl md:mb-4 lg:text-3xl">
          Bring The Latest Technology
        </h1>
        <p className="mb-8 md:mb-8">
          We use industry-leading frameworks like Next.js, React, Tailwind CSS,
          Node.js, and ShadCN to create fast, scalable, and future-ready
          websites.
        </p>
        <Marquee
          reverse
          pauseOnHover
          className="mx-auto max-w-screen-lg [--duration:40s]"
          gap={4}
        >
          {techstacks.map((review) => (
            <div
              key={review.alt}
              className="relative flex h-16 w-24 items-center justify-center md:h-24 md:w-48"
            >
              <Image
                className="object-contain"
                src={review.img}
                alt={review.alt}
                // width={50}
                // height={50}
                fill
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mb-20 space-y-6 border-b border-t py-16 text-center font-inter dark:border-neutral-800 md:flex md:gap-6">
        <div className="mb-8 flex flex-1 flex-col items-center justify-center md:mb-0">
          <h4 className="mb-4 text-3xl">How's The Process?</h4>
          <p className="max-w-[28rem] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            assumenda error iste.
          </p>
        </div>
        <div className="flex-1">
          <Timeline />
        </div>
      </div>

      {/* Cards Plans Section */}
      <div className="mb-20 text-center font-inter">
        <h1 className="mb-2 text-3xl md:mb-4 md:text-4xl">
          Choose Your Website Plan
        </h1>
        <p className="mb-8 md:mb-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          adipisci expedita eos quia, minus vel?
        </p>
        <div className="mx-auto mb-12 flex max-w-screen-lg flex-wrap gap-4">
          <div className="flex min-w-64 flex-1 basis-64 items-center justify-center rounded sm:justify-end">
            <Card className="relative flex min-h-[24rem] w-full max-w-[20rem] flex-col justify-between overflow-hidden rounded-2xl border-purple-100 shadow-none dark:border-neutral-800 dark:bg-neutral-900 md:w-full lg:max-w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Basic Growth</CardTitle>
                <CardDescription>
                  <p className="mb-3">
                    Suitable for a personal website with limited content.
                  </p>
                  <ul className="mx-auto mt-2 flex max-w-[12rem] flex-col items-start space-y-1 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> 1 page
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> Free hosting
                      & domain
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <Button className="h-12 w-full rounded-xl border bg-white text-2xl shadow-none dark:border-none dark:bg-neutral-800">
                  $9.99
                </Button>
              </CardFooter>
              <BorderBeam duration={8} size={100} />
            </Card>
          </div>
          <div className="flex min-w-64 flex-1 basis-64 items-center justify-center rounded sm:justify-start">
            <Card className="flex min-h-[24rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl shadow-none dark:border-neutral-800 dark:bg-neutral-900 md:w-full lg:max-w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Premium-Plus</CardTitle>
                <CardDescription>
                  <p className="mb-3">
                    Ideal for a company profile looking to introduce its
                    business and products.
                  </p>
                  <ul className="mx-auto mt-2 flex max-w-[12rem] flex-col items-start space-y-1 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> Up to 5 pages
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> 1x Revision
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> SEO
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> Free hosting
                      & domain
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <Button className="h-12 w-full rounded-xl border text-xl shadow-none dark:border-none dark:bg-neutral-800">
                  $24.99
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex min-w-64 flex-1 basis-64 items-center justify-center rounded">
            <Card className="flex min-h-[24rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl shadow-none dark:border-neutral-800 dark:bg-neutral-900 md:w-full lg:max-w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Entahusiast</CardTitle>
                <CardDescription>
                  <p className="mb-3">
                    Bring your dream website to life with the support of various
                    exciting features.
                  </p>
                  <ul className="mx-auto mt-2 flex max-w-[12rem] flex-col items-start space-y-1 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> Unlimited Pages
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> 2x Revision
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> SEO
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" /> Free hosting
                      & domain
                    </li>
                  </ul>
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-between">
                <Button className="h-12 w-full rounded-xl border text-xl shadow-none dark:border-none dark:bg-neutral-800">
                  $49.99
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Instant Package Sections */}
        <h1 className="mb-8 text-xl md:mb-12 md:text-2xl">
          or instant package plan?
        </h1>
        <section className="relative flex" id="photos">
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
      {/* <p className="mb-6 text-2xl md:mb-8">Our Collection</p>
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
      </div> */}

      <div className="mb-20 text-center font-inter">
        <h1 className="mb-6 text-2xl md:mb-8 lg:text-3xl">
          Why it's Important To Have Website?
        </h1>
      </div>

      <div className="mb-20 text-center font-inter">
        <h1 className="mb-6 text-2xl md:mb-8 lg:text-3xl">Why Choose Us?</h1>
      </div>

      <div className="mb-20 text-center font-inter">
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

      <div className="mb-20 text-center font-inter">
        <h1 className="mb-6 text-2xl md:mb-8 lg:text-3xl">Contact Us</h1>
      </div>
    </div>
  );
}
