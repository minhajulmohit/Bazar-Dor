"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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

  const handleUpdateName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();

    if (!name) {
      toast.error("নাম লিখুন!");
      return;
    }

    const { error } = await authClient.updateUser({ name });

    if (error) {
      toast.error("নাম আপডেট করা যায়নি!");
      return;
    }

    toast.success("নাম সফলভাবে আপডেট হয়েছে!");
    router.refresh();
  };

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
            <h1 className="text-2xl sm:text-3xl font-bold break-words">
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

      <div className="mt-2 w-full min-w-0 rounded-xl border border-slate-300 bg-white p-4 sm:p-6">
        <h2 className="text-sm font-semibold text-gray-800 mb-6">তথ্য</h2>

        <form onSubmit={handleUpdateName} className="space-y-3">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-700"
          >
            নাম
          </label>

          <input
            id="name"
            name="name"
            type="text"
            defaultValue={user.name}
            placeholder="আপনার নাম লিখুন"
            required
            className="w-full h-10 rounded-md border border-slate-300 bg-transparent px-3 text-sm outline-none transition focus:border-[#05893E] focus:ring-1 focus:ring-[#05893E]/20"
          />

          <button
            type="submit"
            className="w-full h-10 rounded-md bg-[#07883f] text-sm font-medium text-white shadow-sm transition hover:bg-[#067536] active:scale-[0.99]"
          >
            আপডেট
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
