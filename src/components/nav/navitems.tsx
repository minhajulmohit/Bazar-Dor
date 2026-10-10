"use client";

import { TNav } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavItems = () => {
  const [navItems, setNavItems] = useState<TNav[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch(
          "https://api.api-store.workers.dev/api/bazardor/categories",
        );

        if (!res.ok) {
          throw new Error("Categories could not be loaded");
        }

        const data: TNav[] = await res.json();
        setNavItems(data);
      } catch (error) {
        console.error("Category loading error:", error);
      }
    };

    loadCategories();
  }, []);

  return (
    <nav
      aria-label="পণ্যের ক্যাটাগরি"
      className="w-full min-w-0 border-y border-slate-200 bg-white"
    >
      <div className="mx-auto flex w-full max-w-[1280px] min-w-0 items-center gap-2 overflow-x-auto px-3 py-2 sm:justify-center sm:gap-3 sm:px-5">
        {navItems.map((item) => {
          const isActive = pathname === `/category/${item.slug}`;

          return (
            <Link
              key={item.slug}
              href={`/category/${item.slug}`}
              className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-xs transition-colors sm:text-sm ${
                isActive
                  ? "bg-[#05893E] font-bold text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavItems;
