import { fetchLandmarks } from "@/actions/action"
import LandmarkLists from './LandmarkLists';
import { landmarkCardProps } from "@/utils/types";
import SwiperPicture from "../hero/SwiperPicture";

const LandmarkContainer = async ({ search }: { search?: string }) => {

    const landmarks: landmarkCardProps[] = await fetchLandmarks({ search })

    return (
        <div>
            <SwiperPicture landmarks={landmarks} />
            <LandmarkLists landmarks={landmarks} />
        </div>
    )
}

export default LandmarkContainer
