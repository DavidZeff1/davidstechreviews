import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import LoadingProvider from "../app/components/LoadingProvider"; // Add this import

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "David's Tech Reviews",
  description:
    "Honest reviews of laptops, gadgets, and software for students and professionals.",
  keywords: [
    "laptop reviews",
    "student tech 2025",
    "budget gadgets",
    "Amazon product reviews",
    "David's Tech Reviews",
  ],
  openGraph: {
    title: "David's Tech Reviews",
    description:
      "Honest reviews of laptops, gadgets, and software for students and professionals.",
    url: "https://davidstechreviews.vercel.app",
    siteName: "David's Tech Reviews",
    images: [
      {
        url: "https://davidstechreviews.vercel.app/og-image.png", // we can create this later
        width: 1200,
        height: 630,
        alt: "David's Tech Reviews Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David's Tech Reviews",
    description: "Honest reviews of laptops, gadgets, and software.",
    images: ["https://davidstechreviews.vercel.app/og-image.png"],
    creator: "@yourTwitterHandle", // optional
  },
  metadataBase: new URL("https://davidstechreviews.vercel.app"),
  alternates: {
    canonical: "https://davidstechreviews.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add NProgress CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LoadingProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
