import { Skeleton } from "@/components/ui/skeleton"


const LoadingCard = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 xl:grid-cols-4 mt-8">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}

export const SkeletonCard = () => {
    return (
        <div>
            <Skeleton className="h-80 mb-2 rounded-lg" />
            <Skeleton className="h-4 w-3/4 mb-2 rounded-lg" />
            <Skeleton className="h-4 w-1/2 mb-2 rounded-lg" />
            <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-20 mb-2 rounded-lg" />
                <Skeleton className="h-4 w-20 mb-2 rounded-lg" />
            </div>
        </div>
    )
}

export default LoadingCard
