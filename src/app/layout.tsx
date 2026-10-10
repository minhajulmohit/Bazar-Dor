import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import { Suspense } from "react";

import "./globals.css";
import NavBar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";

const NotoSansBengali = Noto_Sans_Bengali({
  variable: "--font-geist-sans",
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description:
    "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর, সর্বনিম্ন, সর্বোচ্চ ও গড় দাম দেখুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${NotoSansBengali.variable} min-h-full antialiased`}
    >
      <body className="flex min-h-screen w-full flex-col overflow-x-clip">
        <header className="w-full min-w-0 shrink-0">
          <NavBar />
        </header>

        <main className="min-w-0 w-full flex-1 bg-[#f0f5f0] pb-10 sm:pb-14">
          {children}
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />
      </body>
    </html>
  );
}
