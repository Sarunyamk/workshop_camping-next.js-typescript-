
import LoadingCard from "@/components/card/LoadingCard"
import LandmarkContainer from "@/components/home/LandmarkContainer"
import { Suspense } from "react"
//suspense ระหว่าง โหลดให้แสดงอะไร


const page = () => {
  return (
    <div>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer />
      </Suspense>
    </div>
  )
}

export default page
