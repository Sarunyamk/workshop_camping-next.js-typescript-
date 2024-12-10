
import LoadingCard from "@/components/card/LoadingCard"
import LandmarkContainer from "@/components/home/LandmarkContainer"

import { Suspense } from "react"
//suspense ระหว่าง โหลดให้แสดงอะไร


const page = async ({ searchParams }: { searchParams: { search?: string, category?: string } }) => {

  const { search, category } = await searchParams

  return (
    <div>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </div>
  )
}

export default page
