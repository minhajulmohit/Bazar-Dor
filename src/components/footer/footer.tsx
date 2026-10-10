const Footer = () => {
  return (
    <footer className="mt-auto w-full min-w-0 border-t border-slate-300 bg-white">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-2 px-3 py-5 sm:px-5 md:flex-row md:items-center md:justify-between md:gap-6">
        <p className="wrap-break-word text-xs leading-6 text-slate-600 sm:text-sm">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="wrap-break-word text-xs leading-6 text-slate-500 sm:text-sm md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
