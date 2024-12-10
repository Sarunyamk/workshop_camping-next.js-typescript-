import { fetchLandmarks, fetchLandmarksHero } from "@/actions/action"
import LandmarkLists from './LandmarkLists';
import { landmarkCardProps } from "@/utils/types";
import SwiperPicture from "../hero/SwiperPicture";
import CategoryList from './CategoryList';
import EmptyList from "./EmptyList";

const LandmarkContainer = async ({ search, category }: { search?: string, category?: string }) => {

    const landmarks: landmarkCardProps[] = await fetchLandmarks({ search, category })
    const landmarksHero: landmarkCardProps[] = await fetchLandmarksHero()

    return (
        <div>
            <SwiperPicture landmarks={landmarksHero} />
            <CategoryList search={search} category={category} />
            {
                landmarks.length === 0
                    ? <EmptyList heading="No results" btnText="Clear Filters" />
                    : <LandmarkLists landmarks={landmarks} />
            }

        </div>
    )
}

export default LandmarkContainer
