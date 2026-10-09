import { TNav } from "@/type";
import Link from "next/link";

const NavItems = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { next: { revalidate: 600 } },
  );
  const navItem = await res.json();

  return (
    <div className="flex gap-5 border-y border-y-slate-200 py-3 items-center justify-center">
      {navItem.map((n: TNav) => (
        <Link href={`/category/${n.slug} `} className="" key={n.slug}>
          {n.icon} {n.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
