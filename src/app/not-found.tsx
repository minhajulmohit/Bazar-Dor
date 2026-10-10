export const dynamic = "force-dynamic";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#f4f8f5] px-4 py-12">
      <div className="w-full max-w-5xl rounded-3xl border border-[#e0ebe3] bg-white p-6 shadow-sm sm:p-10 lg:p-14">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
          <div className="flex w-full flex-col items-center justify-center md:w-1/2">
            <div className="relative flex items-center justify-center">
              <span className="text-[140px] font-black leading-none tracking-tighter text-[#05893E] sm:text-[190px]">
                ৪০৪
              </span>
            </div>

            <div className="mt-5 h-1.5 w-3/4 rounded-full bg-[#e1f0e5]" />
          </div>

    
          <div className="w-full text-center md:w-1/2 md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#05893E]">
              Page Not Found
            </p>

            <h1 className="text-2xl font-bold leading-snug text-[#172b20] sm:text-3xl lg:text-4xl">
              পেজটি খুঁজে পাওয়া যাচ্ছে না
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              আপনি যে পেজটি খুঁজছেন, সেটি হয়তো সরিয়ে ফেলা হয়েছে, নাম পরিবর্তন
              করা হয়েছে অথবা এই মুহূর্তে পাওয়া যাচ্ছে না।
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg border border-[#05893E] bg-[#05893E] px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#046d32] hover:shadow-lg"
            >
              <Home size={19} />
              হোমে ফিরে যান
            </Link>

            <p className="mt-5 text-xs text-gray-400">Error Code: 404</p>
          </div>
        </div>
      </div>
    </main>
  );
}
