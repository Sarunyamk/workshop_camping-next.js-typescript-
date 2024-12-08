import { fetchFavoriteUser } from "@/actions/action"
import LandmarkLists from "@/components/home/LandmarkLists"


const FavoritesPage = async () => {

    const favorites = await fetchFavoriteUser()

    return (
        <LandmarkLists landmarks={favorites} />
    )
}

export default FavoritesPage
