"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const NavButtons = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
    router.refresh();
  };

  if (isPending) {
    return <div className="w-20" />;
  }

  if (!session?.user) {
    return (
      <div className="flex gap-4">
        <Link
          href="/signin"
          className="py-1 px-2 rounded-[5px] transition-all duration-300 hover:-translate-y-0.5"
        >
          <small>সাইন ইন</small>
        </Link>

        <Link
          href="/signup"
          className="bg-[#05893E] py-1 px-2 rounded-[5px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_15px_#05893E]"
        >
          <small>সাইন আপ</small>
        </Link>
      </div>
    );
  }

  const user = session.user;
  const firstLetter = user.name?.trim().charAt(0).toUpperCase();

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="flex items-center gap-2 rounded-full hover:bg-base-200 p-1 pr-3 transition-all duration-200"
      >
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#05893E] text-white font-bold text-lg">
          {firstLetter}
        </span>
        <span className="font-medium max-w-32 truncate">{user.name}</span>
        <span className="text-xs">▼</span>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-xl z-50 mt-3 w-64 p-2 shadow-lg border border-base-300"
      >
        <li className="pointer-events-none">
          <div className="flex flex-col items-start gap-1 py-3">
            <span className="font-bold text-base text-base-content">
              {user.name}
            </span>
            <span className="text-xs text-base-content/60 break-all">
              {user.email}
            </span>
          </div>
        </li>
        <div className="divider my-0" />
        <li>
          <Link href="/profile" className="py-3">
            <span>👤</span>
            আমার প্রোফাইল
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={handleSignOut}
            className="py-3 text-red-600 hover:bg-red-50"
          >
            <span>↩</span>
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavButtons;
