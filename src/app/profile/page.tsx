"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
    router.refresh();
  };
  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return (
      <p className="text-center mt-10">Please sign in to view your profile.</p>
    );
  }

  const user = session.user;
  const firstLetter = user.name?.trim().charAt(0).toUpperCase();

  return (
    <div className="mx-auto flex w-full max-w-4xl min-w-0 flex-col gap-5 px-3 py-6 sm:px-5 sm:py-10">
      <div className="text-start mb-5">
        <h1 className="font-bold">আমার প্রোফাইল</h1>
        <small className="text-slate-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
        </small>
      </div>
      <div className="flex w-full min-w-0 flex-col gap-4 rounded-xl border border-slate-300 bg-white p-4 sm:p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 shrink-0 rounded-full bg-[#05893E] text-white flex items-center justify-center text-3xl font-bold">
            {firstLetter}
          </div>

          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold wrap-break-word">
              {user.name}
            </h1>
            <p className="text-sm sm:text-base text-base-content/60 break-all mt-1">
              {user.email}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSignOut}
          className="btn w-full shrink-0 border-none bg-red-600 text-white hover:bg-red-700 md:w-auto"
        >
          সাইন আউট
        </button>
      </div>

      <Link
        className="h-7 pt-1 rounded-md bg-[#07883f] text-white shadow-sm transition hover:bg-[#067536] active:scale-[0.99] text-center "
        href={"/profile/profileupdate"}
      >
        প্রোফাইল আপডেট করুন
      </Link>
    </div>
  );
};

export default ProfilePage;
