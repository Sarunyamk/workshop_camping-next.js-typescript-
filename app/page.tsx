
import LoadingCard from "@/components/card/LoadingCard"
import LandmarkContainer from "@/components/home/LandmarkContainer"

import { Suspense } from "react"
//suspense ระหว่าง โหลดให้แสดงอะไร


const page = async ({ searchParams }: { searchParams: { search?: string } }) => {

  const { search } = await searchParams

  return (
    <div>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} />
      </Suspense>
    </div>
  )
}

export default page
