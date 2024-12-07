import { fetchLandmarks } from "@/actions/action"
import LandmarkLists from './LandmarkLists';
import { landmarkCardProps } from "@/utils/types";

const LandmarkContainer = async () => {

    const landmarks: landmarkCardProps[] = await fetchLandmarks()

    return (
        <div>
            <LandmarkLists landmarks={landmarks} />
        </div>
    )
}

export default LandmarkContainer
