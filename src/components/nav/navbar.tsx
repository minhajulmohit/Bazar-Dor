import Link from "next/link";
import Date from "../date";
import NavButtons from "./navbuttons";
import NavItems from "./navitems";
import NavMarquee from "./navmarquee";
import { Suspense } from "react";

const NavBar = () => {
  return (
    <div>
      <div className="container mx-auto my-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="bg-[#05893E] p-2 rounded-xl text-3xl">🛒</p>
          <div>
            <Link href={"/"}>
              <p className="font-bold text-2xl">
                বাজার <span className="text-[#05893E]">দর</span>
              </p>
            </Link>
            <small>
              <Date />
            </small>
          </div>
        </div>
        <NavButtons />
      </div>
      <Suspense
        fallback={
          <div className="py-2 text-center">ক্যাটাগরি লোড হচ্ছে...</div>
        }
      >
        <NavItems />
      </Suspense>

      <Suspense
        fallback={
          <div className="border-b border-b-slate-200 p-2">
            বাজারদর লোড হচ্ছে...
          </div>
        }
      >
        <NavMarquee />
      </Suspense>
    </div>
  );
};

export default NavBar;
