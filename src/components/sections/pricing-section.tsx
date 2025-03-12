import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Basic Growth",
    description: "Suitable for a personal website with limited content.",
    features: ["1 page", "Free hosting & domain"],
    price: "$9.99",
    beam: true,
  },
  {
    title: "Premium-Plus",
    description:
      "Ideal for a company profile introducing its business and products.",
    features: ["Up to 5 pages", "1x Revision", "SEO", "Free hosting & domain"],
    price: "$24.99",
  },
  {
    title: "Entahusiast",
    description: "Bring your dream website to life with exciting features.",
    features: [
      "Unlimited Pages",
      "2x Revision",
      "SEO",
      "Free hosting & domain",
    ],
    price: "$49.99",
  },
];

const images = Array.from(
  { length: 8 },
  (_, i) => `/assets/webdesign/${i + 1}.png`,
);

export default function PricingSection() {
  return (
    <div className="mx-auto mb-20 max-w-screen-xl px-2 py-8 text-center sm:px-4">
      <BlurFade delay={0.25} inView>
        <h2 className="mb-2 text-3xl md:mb-4 md:text-4xl">
          Choose Your Website Plan
        </h2>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <p className="mb-8 md:mb-12">
          Affordable plans tailored to your needs.
        </p>
      </BlurFade>
      <div className="mx-auto mb-12 flex max-w-screen-lg flex-wrap gap-4">
        {plans.map((plan, idx) => (
          <div
            key={plan.title}
            className="flex min-w-64 flex-1 basis-64 items-center justify-center"
          >
            <BlurFade delay={0.25 * idx} inView>
              <Card className="relative flex min-h-[24rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl shadow-none dark:border-dark-neutral dark:bg-neutral-900">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription>
                    <p className="mb-3">{plan.description}</p>
                    <ul className="mx-auto mt-2 flex max-w-[12rem] flex-col items-start space-y-1 text-sm font-medium">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>
                <CardContent />
                <CardFooter>
                  <Button className="h-12 w-full rounded-xl text-xl dark:bg-neutral-800">
                    {plan.price}
                  </Button>
                </CardFooter>
                {plan.beam && <BorderBeam duration={8} size={100} />}
              </Card>
            </BlurFade>
          </div>
        ))}
      </div>
      <h3 className="mb-8 text-xl md:mb-12 md:text-2xl">
        Or Instant Package Plan?
      </h3>
      <section className="relative flex">
        <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-2xl object-contain"
                src={imageUrl}
                alt={`Website design example ${idx + 1}`}
                loading="lazy"
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
}
