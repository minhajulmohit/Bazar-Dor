"use client";
import { TNav } from "@/type";
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
    <div className="flex gap-5 border-y border-y-slate-200 py-1 items-center justify-center">
      {navItems.map((n: TNav) => {
        const isActive = pathname === `/category/${n.slug}`;

        return (
          <Link
            key={n.slug}
            href={`/category/${n.slug}`}
            className={`px-4 py-2 rounded-lg transition-colors ${
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
