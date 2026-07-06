function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="aspect-[16/10] animate-pulse bg-slate-200" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-slate-200" />
            <div className="h-10 animate-pulse rounded-xl bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton

