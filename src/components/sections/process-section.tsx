import React from "react";
import Timeline from "@/components/timeline";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function ProcessSection() {
  return (
    <div className="mx-auto max-w-screen-xl px-2 py-8 sm:px-4">
      <div
        id="process"
        className="mb-20 space-y-6 border-b border-t py-16 text-center dark:border-dark-neutral md:flex md:gap-6"
      >
        <div className="mb-8 flex flex-1 flex-col items-center justify-center md:mb-0">
          <BlurFade delay={0.25} inView>
            <h4 className="mb-4 text-3xl">How's The Process?</h4>
          </BlurFade>
          <BlurFade delay={0.25*2} inView>
            <p className="max-w-[28rem] text-center text-neutral-800 dark:text-neutral-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              assumenda error iste.
            </p>
          </BlurFade>
        </div>

        <div className="flex-1">
          <Timeline />
        </div>
      </div>
      <div id="pricing" className=""></div>
    </div>
  );
}
