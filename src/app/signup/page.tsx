"use client";

import { redirect } from "next/navigation";
import { authClient } from "../../lib/auth-client";
import toast from "react-hot-toast";

const signUp = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: user.name as string,
      email: user.email as string,
      password: user.password as string,
      callbackURL: "/signin",
    });
    if (data) {
      toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে");
      redirect("/signin");
    }
    if (error) {
      if (error) {
        if (error.message?.includes("already exists")) {
          toast.error("এই ইমেইল দিয়ে আগে থেকেই অ্যাকাউন্ট খোলা আছে!");
        } else {
          toast.error("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।");
        }
      }
    }
  };

  async function handleGoogleSignUp(
    e: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> {
    e.preventDefault();

    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error("গুগল দিয়ে সাইন ইন করা যায়নি। আবার চেষ্টা করুন।");
    }
  }
  async function handleGithubSignUp(
    e: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> {
    e.preventDefault();

    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) {
      toast.error("গিটহাব দিয়ে সাইন ইন করা যায়নি। আবার চেষ্টা করুন।");
    }
  }

  return (
    <div className="mx-auto my-6 flex w-full min-w-0 max-w-md justify-center px-3 sm:my-10 sm:px-5">
      <form onSubmit={onSubmit} className="w-full min-w-0">
        <div className="text-center">
          <h1 className="font-extrabold text-xl ">অ্যাকাউন্ট তৈরি করুন</h1>
          <small className="text-slate-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </small>
        </div>
        <fieldset className="fieldset w-full min-w-0 rounded-box border border-base-300 bg-base-200 p-3 sm:p-5">
          <legend className="fieldset-legend">সাইন আপ</legend>

          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="আপনার নাম"
          />
          <label className="label">ইমেইল</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="আপনার ইমেইল"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="নতুন পাসওয়ার্ড"
          />

          <button
            type="submit"
            className="btn w-full bg-[#05893E] py-1 my-2 px-2 rounded-[5px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_15px_#05893E]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <span className="flex-1 h-px bg-gray-300"></span>
            <small className="">অথবা</small>
            <span className="flex-1 h-px bg-gray-300"></span>
          </div>
          <div className=" flex gap-4">
            <button
              onClick={handleGoogleSignUp}
              className="btn w-full min-w-0 whitespace-normal bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              গুগল দিয়ে লগ ইন করুন
            </button>
            <button
              onClick={handleGithubSignUp}
              className="btn w-full min-w-0 whitespace-normal bg-black text-white border-black"
            >
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              গিটহাব দিয়ে লগইন করুন
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default signUp;
