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
      const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/categories",
      );
      const data = await res.json();
      setNavItems(data);
    };

    loadCategories();
  }, []);

  return (
    <div className="flex items-center gap-2 overflow-x-auto border-y border-y-slate-200 px-3 py-2 sm:justify-center sm:gap-3">
      {navItems.map((n: TNav) => {
        const isActive = pathname === `/category/${n.slug}`;

        return (
          <Link
            key={n.slug}
            href={`/category/${n.slug}`}
            className={`shrink-0 whitespace-nowrap px-3 py-2 text-sm rounded-lg transition-colors ${
              isActive
                ? "bg-green-600 text-primary-content font-bold"
                : "hover:bg-base-200"
            }`}
          >
            {n.icon}
            {n.nameBn}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
