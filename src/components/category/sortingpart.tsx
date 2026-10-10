type SortingPartProps = {
  sortOrder: string;
  setSortOrder: (value: string) => void;
};

const SortingPart = ({ sortOrder, setSortOrder }: SortingPartProps) => {
  return (
    <div className="mb-5 flex min-w-0 flex-wrap items-center justify-end gap-2 rounded-xl border border-slate-300 bg-white p-3">
      <p className="text-slate-500">সাজান</p>

      <div className="dropdown dropdown-bottom dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn max-w-full rounded-xl text-xs sm:text-sm"
        >
          {sortOrder === "default"
            ? "ডিফল্ট"
            : sortOrder === "high"
              ? "দাম বেশি থেকে কম"
              : "দাম কম থেকে বেশি"}{" "}
          ∨
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu z-10 w-[min(13rem,calc(100vw-24px))] rounded-box bg-slate-100 p-2 shadow"
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
