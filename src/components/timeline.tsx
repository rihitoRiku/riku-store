import React from "react";
import { Code, CreditCard, ShieldCheck } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const FixedTimeline = () => {
  const items = [
    {
      title: "Checkout",
      desc: "Submit your website requirements and complete the payment to get started.",
      icon: <CreditCard size={32} />,
    },
    {
      title: "Development",
      desc: "We design, develop, and refine your website based on your feedback.",
      icon: <Code size={32} />,
    },
    {
      title: "Launch & Handover",
      desc: "Your website goes live! You’ll receive the full source code and onboarding support.",
      icon: <ShieldCheck size={32} />,
    },
  ];

  return (
    <div className="relative mx-auto max-w-md">
      {/* The vertical line */}
      <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 transform bg-gray-200 dark:bg-neutral-700 md:left-12"></div>

      {/* Timeline items */}
      <div className="relative">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative mx-auto max-w-[24rem] md:max-w-full ${index === items.length - 1 ? "" : "mb-12"}`}
          >
            <BlurFade delay={0.25 * index} inView>
              {/* Box container that covers the line */}
              <div className="relative z-10 flex items-center justify-center gap-8 rounded-2xl border bg-white p-4 text-start dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex aspect-square w-24 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                  {item.icon && <div className="text-primary">{item.icon}</div>}
                </div>

                <div className="">
                  <h3 className="mb-2 font-medium">{item.title}</h3>
                  <p className="text-sm text-neutral-800 dark:text-neutral-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
            {/* Circle connector (optional) */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-200 rounded-full z-20"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedTimeline;
