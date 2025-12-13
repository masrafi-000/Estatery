export default function TermsOfServiceLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="h-10 w-64 rounded-lg bg-muted animate-pulse" />
          <div className="mt-2 h-4 w-40 rounded bg-muted animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1 space-y-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-4 rounded bg-muted animate-pulse" />
            ))}
          </div>

          <div className="md:col-span-3 space-y-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 w-48 rounded bg-muted animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-muted animate-pulse" />
                  <div className="h-4 w-5/6 rounded bg-muted animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
