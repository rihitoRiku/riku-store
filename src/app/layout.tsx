import type { Metadata } from "next";
// Theme & Fonts
import { Rethink_Sans, Passions_Conflict, Inter } from "next/font/google";
import "./globals.css";
// Components
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/ui/toast";
// Libraries
import NextTopLoader from "nextjs-toploader";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});
const passionsConflict = Passions_Conflict({
  weight: "400",
  variable: "--font-passion-conflict",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Riku Store",
    template: "%s | Riku Store",
  },
  description: "Minimalist e-commerce store",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1, // Prevent zooming on mobile
  },
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  openGraph: {
    title: "Riku Store",
    description: "Minimalist e-commerce store",
    url: "https://your-site.com", // Domain
    type: "website",
    images: ["/og-image.jpg"], // Default OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <ToastProvider />
          <NextTopLoader
            color="#16a34a"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
          />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
