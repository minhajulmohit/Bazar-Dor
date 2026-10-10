type CategorySkeletonProps = {
  count?: number;
};

const CategorySkeleton = ({ count = 6 }: CategorySkeletonProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl min-w-0 px-3 sm:px-5">
      <div className="my-4 flex min-w-0 items-center gap-3 rounded-xl border border-slate-300 bg-white p-3 sm:my-7 sm:p-4">
        <div className="h-14 w-14 shrink-0 animate-pulse rounded-xl bg-[#f0f5f0] sm:h-16 sm:w-16" />

        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-6 w-36 max-w-full animate-pulse rounded-md bg-slate-200 sm:h-7 sm:w-48" />

          <div className="h-3 w-48 max-w-full animate-pulse rounded-md bg-slate-100 sm:w-64" />
        </div>
      </div>

      <div className="mb-5 flex min-w-0 flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-300 bg-white p-3">
        <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />

        <div className="h-9 w-32 max-w-full animate-pulse rounded-xl bg-slate-100 sm:w-40" />
      </div>

      <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-3 sm:p-4"
          >
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-[#f0f5f0] sm:h-12 sm:w-12" />

              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-2/5 animate-pulse rounded bg-slate-100" />
              </div>
            </div>

            <div className="mt-4 flex min-w-0 items-end justify-between gap-2">
              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-3 w-16 animate-pulse rounded bg-slate-100" />
                <div className="h-6 w-24 max-w-full animate-pulse rounded bg-slate-200" />
              </div>

              <div className="h-6 w-14 shrink-0 animate-pulse rounded-full bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
