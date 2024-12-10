import { fetchLandmarks } from "@/actions/action"
import LandmarkLists from './LandmarkLists';
import { landmarkCardProps } from "@/utils/types";
import SwiperPicture from "../hero/SwiperPicture";
import CategoryList from './CategoryList';

const LandmarkContainer = async ({ search, category }: { search?: string, category?: string }) => {

    const landmarks: landmarkCardProps[] = await fetchLandmarks({ search, category })

    return (
        <div>
            <SwiperPicture landmarks={landmarks} />
            <CategoryList search={search} category={category} />
            <LandmarkLists landmarks={landmarks} />
        </div>
    )
}

export default LandmarkContainer
