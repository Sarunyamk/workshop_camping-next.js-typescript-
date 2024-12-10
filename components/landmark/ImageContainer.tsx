import Image from "next/image"


const ImageContainer = ({ mainImage, name }: { mainImage: string, name: string }) => {
    return (
        <section className="h-[300px] md:h-[500px] relative mt-8">
            <Image src={mainImage} sizes="100vw" fill priority
                alt={name} className="object-cover rounded-lg" />
        </section>
    )
}

export default ImageContainer
