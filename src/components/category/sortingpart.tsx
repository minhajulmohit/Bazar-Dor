const SortingPart = () => {
  return (
    <div className="bg-white container mx-auto p-2 my-5 border border-slate-300 rounded-xl flex justify-end items-center">
      <p className="text-slate-500">সাজান</p>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 rounded-xl text-slate-500"
        >
          ডিফল্ট ∨
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortingPart;
