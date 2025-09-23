import { Skeleton } from "@/components/ui/skeleton"

export default function FAQLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Skeleton className="w-10 h-10 rounded-lg" />
              <div>
                <Skeleton className="h-6 w-48 mb-1" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-16" />
              ))}
            </div>
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Skeleton className="h-6 w-32 mx-auto mb-8" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto mb-8" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-4" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-12" />
          <Skeleton className="h-12 w-full max-w-lg mx-auto" />
        </div>
      </div>

      {/* Quick Actions Skeleton */}
      <div className="py-12 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-64 mx-auto mb-2" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-6 text-center border rounded-lg">
                <Skeleton className="w-12 h-12 rounded-full mx-auto mb-4" />
                <Skeleton className="h-5 w-24 mx-auto mb-2" />
                <Skeleton className="h-4 w-32 mx-auto mb-3" />
                <Skeleton className="h-4 w-28 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content Skeleton */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <Skeleton className="h-6 w-24 mb-6" />
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
              <div className="mt-12 p-6 border rounded-lg">
                <Skeleton className="w-8 h-8 mx-auto mb-4" />
                <Skeleton className="h-5 w-32 mx-auto mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-8 w-full" />
              </div>
            </div>

            {/* FAQ List Skeleton */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-4 w-40" />
              </div>
              <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="border rounded-lg">
                    <div className="p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Skeleton className="w-10 h-10 rounded-lg" />
                        <div>
                          <Skeleton className="h-5 w-80 mb-2" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                      <Skeleton className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
