import { fetchFavoriteUser } from "@/actions/action"
import EmptyList from "@/components/home/EmptyList"
import LandmarkLists from "@/components/home/LandmarkLists"


const FavoritesPage = async () => {

    const favorites = await fetchFavoriteUser()

    if (favorites.length === 0) return <EmptyList heading="No Favorites" />

    return (
        <LandmarkLists landmarks={favorites} />
    )
}

export default FavoritesPage
