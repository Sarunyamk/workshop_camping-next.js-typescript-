import { fetchLandmarks } from "@/actions/action"
import LandmarkLists from './LandmarkLists';

const LandmarkContainer = async () => {

    const landmarks = await fetchLandmarks()
    console.log(landmarks, "landmark")

    return (
        <div>
            <LandmarkLists landmarks={landmarks} />
        </div>
    )
}

export default LandmarkContainer
