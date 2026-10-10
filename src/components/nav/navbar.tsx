import Link from "next/link";
import { Suspense } from "react";

import Date from "../date";
import NavButtons from "./navbuttons";
import NavItems from "./navitems";
import NavMarquee from "./navmarquee";

const NavBar = () => {
  return (
    <div className="w-full min-w-0 bg-white">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 items-center justify-between gap-2 px-3 py-3 sm:px-5 md:gap-4">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#05893E] text-xl sm:h-12 sm:w-12 sm:text-2xl">
            🛒
          </span>

          <span className="min-w-0">
            <span className="block whitespace-nowrap text-base font-extrabold sm:text-xl md:text-2xl">
              বাজার <span className="text-[#05893E]">দর</span>
            </span>

            <span className="block text-[10px] text-slate-500 sm:text-xs">
              <Date />
            </span>
          </span>
        </Link>

        <div className="min-w-0 shrink-0">
          <NavButtons />
        </div>
      </div>

      <Suspense
        fallback={
          <div className="px-3 py-2 text-center text-sm text-slate-500">
            ক্যাটাগরি লোড হচ্ছে...
          </div>
        }
      >
        <NavItems />
      </Suspense>

      <Suspense
        fallback={
          <div className="border-b border-slate-200 px-3 py-2 text-sm">
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
