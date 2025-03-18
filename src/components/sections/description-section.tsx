"use client"

import React from "react";

export default function DescriptionSection() {
  return (
    <div className="mx-auto mb-12 max-w-screen-xl px-2 py-8 sm:px-4">
      <div className="flex flex-col gap-8 rounded-3xl p-0 dark:border-dark-neutral md:border md:p-8 md:dark:bg-neutral-900 lg:flex-row">
        <div className="order-2 grid max-h-[32rem] min-h-[26rem] w-full grid-cols-2 md:aspect-[4/3] lg:order-2">
          {/* Bagian kiri: Modern Trendy Design dan Pixel Perfect */}
          <div className="row-span-2 flex flex-col border-r bg-white dark:border-dark-neutral dark:bg-[#121212] md:bg-white md:dark:border-dark-neutral md:dark:bg-neutral-900">
            <div className="flex-1 p-4 md:p-6 flex flex-col justify-end">
              <h3 className="mb-2 text-lg font-medium md:mb-6 md:text-2xl text-end">
                Modern Simple Design
              </h3>
              <p className="text-sm text-neutral-800 dark:text-neutral-100 text-end">
                Stay ahead of the curve with sleek, user-friendly, and visually
                stunning designs that align with the latest web trends.
              </p>
            </div>
            <div className="flex-1 border-t p-4 dark:border-dark-neutral md:p-6 md:pt-6 text-end">
              <h3 className="mb-2 text-lg font-medium md:mb-6 md:text-2xl">
                Pixel Perfect
              </h3>
              <p className="text-sm text-neutral-800 dark:text-neutral-100 text-end">
                Ensuring precise & high-quality designs that look flawless on
                any screen or device.
              </p>
            </div>
          </div>

          {/* Bagian kanan: Full Coding */}
          <div className="row-span-2 flex flex-col justify-center bg-white p-4 dark:bg-[#121212] md:bg-white md:p-6 md:dark:bg-neutral-900">
            <h3 className="mb-2 text-3xl font-medium md:mb-6 md:text-4xl">
              Full Coding
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-100">
              We craft clean, efficient, and fully optimized code to ensure your
              website runs smoothly and delivers top-notch performance.
            </p>
          </div>
        </div>
        <div className="order-1 mt-8 flex w-full flex-col justify-center text-center text-4xl md:text-5xl lg:order-1 lg:mt-0 lg:max-w-[32rem]  dark:text-neutral-400">
          <p>Why Choose Us?</p>
        </div>
      </div>
    </div>
  );
}
