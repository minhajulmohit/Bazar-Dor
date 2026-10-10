"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfileUpdatePage = () => {
  const router = useRouter();

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
    router.push("/profile");
  };

  return (
    <div className="flex justify-center">
      <div className="mt-5 min-w-0 rounded-xl border border-slate-300 bg-white p-4 sm:p-6">
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

export default ProfileUpdatePage;
