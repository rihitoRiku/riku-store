"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { showToast } from "@/lib/utils/toast";
import Autoplay from "embla-carousel-autoplay";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FaArrowLeft } from "react-icons/fa6";
import { Heart } from "lucide-react";
import { Forward } from "lucide-react";

const allProducts = [
  {
    id: 0,
    title: "Company Profile Template",
    price: 20,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/1.png",
  },
  {
    id: 1,
    title: "Professional Resume",
    price: 15,
    sold: 16,
    category: "Digital Resume",
    image: "/assets/portfolio/2.png",
  },
  {
    id: 2,
    title: "Social Media LinkTree",
    price: 10,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/3.png",
  },
  {
    id: 3,
    title: "Corporate Branding Kit",
    price: 35,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/4.png",
  },
  {
    id: 4,
    title: "Creative CV Template",
    price: 18,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/5.png",
  },
  {
    id: 5,
    title: "Business Card Design",
    price: 8,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/6.png",
  },
  {
    id: 6,
    title: "Developer Portfolio",
    price: 25,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/7.png",
  },
  {
    id: 7,
    title: "Social Media Bundle",
    price: 30,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/8.png",
  },
  {
    id: 8,
    title: "Startup Pitch Deck",
    price: 45,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/9.png",
  },
  {
    id: 9,
    title: "Academic CV",
    price: 12,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/10.png",
  },
  {
    id: 10,
    title: "Instagram Link Page",
    price: 7,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/11.png",
  },
  {
    id: 11,
    title: "Annual Report Template",
    price: 40,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/12.png",
  },
  {
    id: 12,
    title: "Creative Portfolio",
    price: 22,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/13.png",
  },
  {
    id: 13,
    title: "YouTube Channel Links",
    price: 9,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/14.png",
  },
  {
    id: 14,
    title: "Corporate Identity Package",
    price: 55,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/15.png",
  },
  {
    id: 15,
    title: "Job Application Bundle",
    price: 19,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/16.png",
  },
  {
    id: 16,
    title: "Artist LinkTree",
    price: 11,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/17.png",
  },
  {
    id: 17,
    title: "Small Business Package",
    price: 29,
    sold: 20,
    category: "Company Profile",
    image: "/assets/portfolio/18.png",
  },
  {
    id: 18,
    title: "Visual Resume",
    price: 16,
    sold: 20,
    category: "Digital Resume",
    image: "/assets/portfolio/19.png",
  },
  {
    id: 19,
    title: "Podcast Links Page",
    price: 10,
    sold: 20,
    category: "LinkTree",
    image: "/assets/portfolio/20.png",
  },
];

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter options
  const categories = [
    {
      name: "All Type",
      icon: "/assets/icons/all.png",
    },
    {
      name: "Company Profile",
      icon: "/assets/icons/company.png",
    },
    {
      name: "Digital Resume",
      icon: "/assets/icons/cv.png",
    },
    {
      name: "LinkTree",
      icon: "/assets/icons/tree.png",
    },
  ];
  const [activeFilter, setActiveFilter] = useState("All Type");

  // Infinite scroll states
  const [visibleProducts, setVisibleProducts] = useState<typeof allProducts>(
    [],
  );
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 6;

  // Observer for infinite scrolling
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  // Filter products based on category
  const filteredProducts =
    activeFilter === "All Type"
      ? allProducts
      : allProducts.filter((product) => product.category === activeFilter);

  // Load initial products
  useEffect(() => {
    // Reset pagination when filter changes
    setPage(1);
    setVisibleProducts(filteredProducts.slice(0, itemsPerPage));
    setHasMore(filteredProducts.length > itemsPerPage);
  }, [activeFilter]);

  // Function to load more products
  const loadMoreProducts = () => {
    if (filteredProducts.length <= page * itemsPerPage) {
      setHasMore(false);
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const nextPage = page + 1;
      const newProducts = filteredProducts.slice(0, nextPage * itemsPerPage);

      setVisibleProducts(newProducts);
      setPage(nextPage);
      setHasMore(filteredProducts.length > nextPage * itemsPerPage);
      setIsLoading(false);
    }, 800); // Simulate network delay
  };

  // Handle filter click with smooth transition
  const handleFilterClick = (category: string) => {
    setActiveFilter(category);

    // Update URL without refreshing the page
    const params = new URLSearchParams(window.location.search);

    if (category === "All Type") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const url = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ path: url }, "", url);
  };

  // Sync URL params with state when using browser navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setActiveFilter(params.get("category") || "All Type");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Inside your component
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (productId: number) => {
    setLoadedImages((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };
  return (
    <>
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-2 py-6 lg:px-4 lg:py-8">
        <Link href="/" className="ms-2 flex items-center gap-2">
          <FaArrowLeft />
          <span>Back</span>
        </Link>
        <div className="flex w-full flex-col rounded-lg p-4">
          {/* Caraousel Section */}
          {/* <div className="mb-8 md:mb-16">
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
                          // src={`/assets/items/car-${index + 1}.png`}
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
          <section className="mb-16">
            <div className="mx-auto mb-12 max-w-screen-md">
              <h2 className="mb-4 text-center text-2xl font-semibold md:mb-6 md:text-3xl">
                Our Collection
              </h2>
              <p className="text-center text-neutral-800 dark:text-neutral-100">
                Browse our collection of templates for various needs. Filter by
                category to find exactly what you're looking for.
              </p>
            </div>
            <div className="mb-12">
              <ul className="mx-auto flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-800 dark:text-neutral-100 md:gap-6 md:text-base">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`flex items-center justify-center gap-3 rounded-full px-4 py-2 transition-all duration-300 ease-in-out ${
                      activeFilter === category.name
                        ? "bg-custom-beige text-white dark:bg-green-400 dark:text-black"
                        : "bg-neutral-100 dark:bg-neutral-800"
                    }`}
                    onClick={() => handleFilterClick(category.name)}
                  >
                    <div className="relative size-8">
                      <Image
                        src={category.icon}
                        alt="category icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {category.name}
                  </button>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product, index) => {
                // Add reference to last item for infinite scroll detection
                const isLastElement = index === visibleProducts.length - 1;
                return (
                  <div
                    key={product.id}
                    ref={isLastElement ? lastProductElementRef : null}
                    className="aspect-[7/6] w-full"
                  >
                    <Link
                      href={`templates/${product.id}`}
                      className="relative flex h-[90%] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border text-neutral-400 dark:border-dark-neutral"
                    >
                      {!loadedImages[product.id] && (
                        <Skeleton className="absolute inset-0 h-full w-full rounded-2xl" />
                      )}
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className={`transform rounded-2xl object-cover transition-transform duration-300 hover:scale-110 ${loadedImages[product.id] ? "opacity-100" : "opacity-0"}`}
                        onLoad={() => handleImageLoad(product.id)}
                        onError={() => handleImageLoad(product.id)} // Handle errors too
                      />
                    </Link>

                    <div className="flex justify-between px-4 py-1.5">
                      <p>{product.title}</p>
                      <div className="inline-flex gap-2">
                        <p>${product.price}</p>
                        <div className="flex items-center justify-center gap-1">
                          <Forward className="size-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {visibleProducts.length === 0 && !isLoading && (
                <div className="col-span-full py-8 text-center">
                  No products found in this category.
                </div>
              )}
            </div>

            {isLoading && (
              <div className="flex justify-center py-8">
                <div className="loader text-center">Loading more items...</div>
              </div>
            )}

            {!hasMore && visibleProducts.length > 0 && (
              <div className="mt-8 text-center text-neutral-500">
                You've reached the end of the list.
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
