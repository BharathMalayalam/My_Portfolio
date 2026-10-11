export function SectionSkeleton({ minH = '80vh' }: { minH?: string }) {
  return (
    <div
      className="w-full animate-pulse"
      style={{ minHeight: minH }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="h-4 w-24 rounded-full bg-muted" />
          <div className="h-10 w-64 sm:w-80 rounded-xl bg-muted" />
          <div className="h-4 w-48 rounded-full bg-muted" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-muted h-48" />
          ))}
        </div>
      </div>
    </div>
  )
}
