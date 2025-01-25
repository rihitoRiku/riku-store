import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'mesh-background-light': "url('/mesh-gradient.png')",
        // 'mesh-background-dark': "url('/mesh-gradient-dark.svg')",
      },
      fontFamily: {
        sans: ["var(--font-rethink-sans)"],
        passionConflict: ["var(--font-passion-conflict)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        primary: {
          DEFAULT: "#",
        },
        secondary: {
          DEFAULT: "#",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        custom: {
          dark: "#09090B",
          light: "#FAFAFA",
          gray: "#58626C",
          beige: "#DAC8BE",
          peach: "#ECC1A1",
          cream: "#F5F1EE",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
