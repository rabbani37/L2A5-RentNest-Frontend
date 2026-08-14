import { Skeleton } from "@/components/ui/skeleton";


export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-10  w-64" />
      </div>
    </div>
  )
}
