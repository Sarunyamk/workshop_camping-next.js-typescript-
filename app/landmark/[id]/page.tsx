
import { fetchLandmarkDetail } from "@/actions/action"
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton"
import BreadCrumb from "@/components/landmark/BreadCrumb"
import Description from "@/components/landmark/Description"
import ImageContainer from "@/components/landmark/ImageContainer"
import ShareButton from "@/components/landmark/ShareButton"
import MapLandmark from "@/components/map/MapLandmark"
import { redirect } from "next/navigation"


const LandmarkDetail = async ({ params }: { params: { id: string } }) => {

    const { id } = await params

    const landmark = await fetchLandmarkDetail({ id })

    if (!landmark) redirect('/')

    return (
        <section>
            <BreadCrumb name={landmark.name} />
            <header className="flex justify-between mt-8 items-center">
                <h1 className="text-4xl font-bold capitalize">
                    {landmark.name}
                </h1>
                <div className="flex items-center gap-4">
                    <ShareButton landmarkId={landmark.id} name={landmark.name} />
                    <FavoriteToggleButton landmarkId={landmark.id} />
                </div>
            </header>
            <ImageContainer name={landmark.name} mainImage={landmark.image} />
            <section>
                <div>
                    <Description description={landmark.description} />
                    <MapLandmark location={{ lat: landmark.lat, lng: landmark.lng }} />
                </div>
            </section>
        </section>
    )
}

export default LandmarkDetail
