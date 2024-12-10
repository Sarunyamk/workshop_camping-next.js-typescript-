import { fetchLandmarkDetail } from "@/actions/action"


const LandmarkDetail = async ({ params }: { params: { id: string } }) => {

    const { id } = await params

    const landmark = await fetchLandmarkDetail({ id })

    return (
        <div>

        </div>
    )
}

export default LandmarkDetail
