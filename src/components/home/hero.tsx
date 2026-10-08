import Image from "next/image";
import Date from "../date";
import HeroImage from "@/app/bazar-hero.png";

const Hero = () => {
  return (
    <div className="container mx-auto bg-white my-10 p-5 rounded-2xl border border-slate-200 flex justify-between">
      <div className="flex flex-col items-start gap-6">
        <small className="text-[#05893E] bg-[#05893E20] px-2 py-1 rounded-full">
          <Date />
        </small>
        <h1 className="font-extrabold text-3xl">
          আজকের বাজারের <span className="text-[#05893E]">দাম</span> এক নজরে
        </h1>
        <small className="text-slate-500">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক <br /> এবং দামের পরিবর্তন এক
          জায়গায়।
        </small>
        <button className="bg-[#05893E] py-1 px-2 rounded-[5px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_10px_#05893E]">
          <small>সব পণ্য দেখুন</small>
        </button>
      </div>
      <Image className="h-60 w-60" src={HeroImage} alt="হিরো ইমেজ" />
    </div>
  );
};

export default Hero;
