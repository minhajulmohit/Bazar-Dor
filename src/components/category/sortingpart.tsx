type SortingPartProps = {
  sortOrder: string;
  setSortOrder: (value: string) => void;
};

const SortingPart = ({ sortOrder, setSortOrder }: SortingPartProps) => {
  return (
    <div className="flex justify-end items-center gap-2 bg-white p-3 rounded-xl border border-slate-300 mb-5">
      <p className="text-slate-500">সাজান</p>

      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn rounded-xl">
          {sortOrder === "default"
            ? "ডিফল্ট"
            : sortOrder === "high"
              ? "দাম বেশি থেকে কম"
              : "দাম কম থেকে বেশি"}{" "}
          ∨
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-slate-100 rounded-box z-10 w-52 p-2 shadow"
        >
          <li>
            <button onClick={() => setSortOrder("default")}>ডিফল্ট</button>
          </li>

          <li>
            <button onClick={() => setSortOrder("high")}>
              দাম বেশি থেকে কম
            </button>
          </li>

          <li>
            <button onClick={() => setSortOrder("low")}>
              দাম কম থেকে বেশি
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortingPart;
