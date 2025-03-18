"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <div className="mb-8 min-h-[52rem] pt-48 text-center text-3xl sm:text-4xl md:text-5xl mx-auto max-w-screen-xl px-2 py-8 sm:px-4">
      <div className="group relative mx-auto mb-6 flex w-[14rem] cursor-pointer items-center justify-center rounded-full px-4 py-1.5 text-xl shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 hover:shadow-[inset_0_-5px_10px_#8fdfff3f] md:w-[16rem] md:text-lg">
        <span
          className={cn(
            "absolute inset-0 animate-gradient rounded-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
          )}
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "subtract",
          }}
        />
        ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-sm font-medium">
          Pre-Release!
        </AnimatedGradientText>
        <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
      <TextAnimate className="mb-24" animation="slideUp" by="word" once>
        We'll build your small business website with lovely design and
        affordable price
      </TextAnimate>
      <RainbowButton
        className="text-sm md:py-6 md:text-lg text-white dark:text-black"
        onClick={() =>
          document
            .getElementById("process")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Let’s Get Started
      </RainbowButton>
    </div>
  );
}
