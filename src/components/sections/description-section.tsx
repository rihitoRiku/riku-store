import React from "react";

export default function DescriptionSection() {
  return (
    <div className="mb-12">
      <div className="flex flex-col gap-8 rounded-3xl p-0 dark:border-dark-neutral md:border md:p-8 md:dark:bg-neutral-900 lg:flex-row">
        <div className="order-2 grid max-h-[32rem] min-h-[26rem] w-full grid-cols-2 md:order-1 md:aspect-[4/3]">
          <div className="row-span-2 flex flex-col justify-center border-r bg-white p-4 dark:border-green-200 dark:bg-[#121212] md:bg-white md:p-6 md:dark:border-dark-neutral md:dark:bg-neutral-900">
            <h3 className="mb-2 text-3xl font-medium md:mb-6 md:text-4xl">
              Full Coding
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-100">
              We craft clean, efficient, and fully optimized code to ensure your
              website runs smoothly and delivers top-notch performance.
            </p>
          </div>
          <div className="border-b bg-white p-4 dark:border-green-200 dark:bg-[#121212] md:bg-white md:p-6 md:dark:border-dark-neutral md:dark:bg-neutral-900">
            <h3 className="mb-2 text-lg font-medium md:mb-6 md:text-2xl">
              Modern Trendy Design
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-100">
              Stay ahead of the curve with sleek, user-friendly, and visually
              stunning designs that align with the latest web trends.
            </p>
          </div>
          <div className="bg-white p-4 dark:bg-[#121212] md:bg-white md:p-6 md:dark:bg-neutral-900">
            <h3 className="mb-2 text-lg font-medium md:mb-6 md:text-2xl">
              Pixel Perfect
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-100">
              Ensuring precise & high-quality designs that look flawless on any
              screen or device.
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
  );
}
