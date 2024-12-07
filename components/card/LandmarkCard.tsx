import Image from "next/image"
import { landmarkCardProps } from "@/utils/types"
import LandmarkRating from "./LandmarkRating"

const LandmarkCard = ({ landmark }: { landmark: landmarkCardProps }) => {

    const { image, name, id, province, category, price, lat, lng, description } = landmark
    return (
        <div>
            <article className="group relative">

                <div className="relative h-80 rounded-lg">
                    <Image
                        src={image} alt={name} fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />

                </div>

                <div className="flex items-center justify-between mt-2">
                    <h3 className="text-sm font-semibold">{name.substring(0, 30)}</h3>
                    <LandmarkRating />
                </div>

                <p className="text-sm text-muted-foreground">
                    {description.substring(0, 40)}
                </p>

                <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">THB{price}</span>
                    <p className="font-semibold text-sm">{province}</p>
                </div>

            </article>
        </div>
    )
}

export default LandmarkCard
