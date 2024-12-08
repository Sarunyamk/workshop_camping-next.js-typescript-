import { fetchLandmarks } from "@/actions/action"
import LandmarkLists from './LandmarkLists';
import { landmarkCardProps } from "@/utils/types";
import SwiperPicture from "../hero/SwiperPicture";

const LandmarkContainer = async () => {

    const landmarks: landmarkCardProps[] = await fetchLandmarks()

    return (
        <div>
            <SwiperPicture landmarks={landmarks} />
            <LandmarkLists landmarks={landmarks} />
        </div>
    )
}

export default LandmarkContainer
