import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
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
      className={`${NotoSansBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <NavBar />
        <div className="bg-[#f0f5f0] pb-20"> {children}</div>
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
