import Image from "next/image";
import Date from "../date";
import HeroImage from "@/app/bazar-hero.png";

const Hero = () => {
  return (
    <section className="mx-auto w-full max-w-7xl min-w-0 px-3 sm:px-5">
      <div className="my-5 flex min-w-0 flex-col items-center gap-5 rounded-2xl border border-slate-200 bg-white p-4 sm:my-8 sm:p-6 md:flex-row md:justify-between md:p-8">
        <div className="flex min-w-0 w-full flex-col items-start gap-4 sm:gap-6">
          <small className="rounded-full bg-[#05893E20] px-2 py-1 text-[#05893E]">
            <Date />
          </small>

          <h1 className="text-2xl font-extrabold leading-snug sm:text-3xl lg:text-4xl">
            আজকের বাজারের <span className="text-[#05893E]">দাম</span> এক নজরে
          </h1>

          <p className="text-sm leading-6 text-slate-500 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#allProducts"
            className="rounded-md bg-[#05893E] px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:shadow-md"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <div className="flex w-full shrink-0 justify-center md:w-auto">
          <Image
            className="h-auto w-full max-w-[180px] object-contain sm:max-w-[220px] md:max-w-[260px]"
            src={HeroImage}
            alt="বাজারের পণ্য"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
