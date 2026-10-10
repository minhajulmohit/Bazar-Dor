"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useState } from "react";

const NavButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) return;
    toast.success("সাইন আউট হচ্ছে");
    router.push("/signin");
    router.refresh();
  };

  if (isPending) {
    return (
      <div className="h-9 w-16 animate-pulse rounded-md bg-slate-100 sm:w-24" />
    );
  }

  if (!session?.user) {
    return (
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <Link
          href="/signin"
          className="whitespace-nowrap rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 sm:px-3 sm:text-sm"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="whitespace-nowrap rounded-lg bg-[#05893E] px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-[#046d32] sm:px-4 sm:text-sm"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const user = session.user;
  const firstLetter = user.name?.trim().charAt(0).toUpperCase() || "U";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="ব্যবহারকারীর মেনু"
        aria-expanded={isOpen}
        className="flex max-w-37.5 items-center gap-2 rounded-full p-1 transition hover:bg-slate-100 sm:max-w-55 sm:pr-3"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#05893E] text-base font-bold text-white">
          {firstLetter}
        </span>

        <span className="hidden max-w-28 truncate text-sm font-medium sm:block">
          {user.name}
        </span>

        <span className="text-xs">▼</span>
      </button>

      <ul
        className={`absolute right-0 top-full z-50 mt-2 w-[min(16rem,calc(100vw-24px))] rounded-xl border border-slate-200 bg-white p-2 shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="pointer-events-none">
          <div className="flex flex-col items-start gap-1 py-3">
            <span className="max-w-full wrap-break-word font-bold text-slate-800">
              {user.name}
            </span>
            <span className="max-w-full break-all text-xs text-slate-500">
              {user.email}
            </span>
          </div>
        </li>

        <div className="divider my-0" />

        <li>
          <Link
            href="/profile"
            className="py-3 "
            onClick={() => setIsOpen(false)}
          >
            👤 আমার প্রোফাইল
          </Link>
        </li>

        <li>
          <button
            type="button"
            onClick={handleSignOut}
            className="py-2 px-3 text-red-600 hover:bg-red-100 rounded-xl"
          >
            ↩ সাইন আউট
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavButtons;
