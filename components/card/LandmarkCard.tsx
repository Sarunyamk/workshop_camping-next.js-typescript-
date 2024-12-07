import Image from "next/image"
import { names } from './../../.next/server/middleware';

const LandmarkCard = ({ landmark }) => {

    const { image, name } = landmark
    return (
        <div>
            <article className="group relative">
                <div>
                    <h1>{name}</h1>
                </div>
                <div className="relative h-80 ">
                    <Image
                        src={image} alt={name} fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover" />

                </div>
            </article>
        </div>
    )
}

export default LandmarkCard
