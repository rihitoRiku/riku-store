import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Rethink_Sans, Passions_Conflict, Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import NextTopLoader from "nextjs-toploader";
import { ToastProvider } from "@/components/ui/toast"

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
})

const passionsConflict = Passions_Conflict({
  weight: "400",
  variable: "--font-passion-conflict",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Riku Store",
  description: "Minimalist e-commerce store",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`font-sans ${rethinkSans.variable} ${passionsConflict.variable} ${inter.variable} antialiased`} suppressHydrationWarning={true}
      >
        <ToastProvider />
        {/* Top Loader */}
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <Navigation />
          <main className="min-h-[calc(100vh-160px)]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
