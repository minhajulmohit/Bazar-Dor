const NavButtons = () => {
  return (
    <div className=" flex gap-4">
      <button className="py-1 px-2 rounded-[5px] transition-all duration-300 hover:-translate-y-0.5 ">
        <small>সাইন ইন</small>
      </button>
      <button className="bg-[#05893E] py-1 px-2 rounded-[5px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_15px_#05893E]">
        <small>সাইন আপ</small>
      </button>
    </div>
  );
};

export default NavButtons;
