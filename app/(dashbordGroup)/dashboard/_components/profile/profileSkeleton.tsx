import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-8 w-32" />
        <Skeleton className="mt-2 h-4 w-60" />
      </div>

      <div className="rounded-xl border p-6">
        {/* Profile header */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-20 w-20 rounded-full" />

          <div>
            <Skeleton className="h-6 w-36" />
            <Skeleton className="mt-2 h-4 w-48" />
          </div>
        </div>

        {/* Form */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          ))}
        </div>

        <Skeleton className="mt-6 h-10 w-28 rounded-md" />
      </div>
    </div>
  );
}