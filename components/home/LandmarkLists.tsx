import LandmarkCard from "../card/LandmarkCard"
import { landmarkCardProps } from "../../utils/types"
import LoadingCard from "../card/LoadingCard"


const LandmarkLists = ({ landmarks }: { landmarks: landmarkCardProps[] }) => {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 gap-8 xl:grid-cols-4 mt-8">
            {
                landmarks.map((landmark) => {
                    return <LandmarkCard key={landmark.id} landmark={landmark} />
                })
            }
        </section>
    )
}

export default LandmarkLists

