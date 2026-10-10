"use client";

import { useState } from "react";

type SortingPartProps = {
  sortOrder: string;
  setSortOrder: (value: string) => void;
};

const SortingPart = ({ sortOrder, setSortOrder }: SortingPartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5 flex min-w-0 flex-wrap items-center justify-end gap-2 rounded-xl border border-slate-300 bg-white p-3">
      <p className="text-slate-500">সাজান</p>

      <div className="dropdown dropdown-bottom dropdown-end">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="btn max-w-full rounded-xl text-xs sm:text-sm"
        >
          {sortOrder === "default"
            ? "ডিফল্ট"
            : sortOrder === "high"
              ? "দাম বেশি থেকে কম"
              : "দাম কম থেকে বেশি"}{" "}
          ∨
        </button>

        <ul
          tabIndex={0}
          className={`dropdown-content menu z-10 w-[min(13rem,calc(100vw-24px))] rounded-box bg-slate-100 p-2 shadow ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <button
              onClick={() => {
                setSortOrder("default");
                setIsOpen(false);
              }}
            >
              ডিফল্ট
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setSortOrder("high");
                setIsOpen(false);
              }}
            >
              দাম বেশি থেকে কম
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setSortOrder("low");
                setIsOpen(false);
              }}
            >
              দাম কম থেকে বেশি
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortingPart;
