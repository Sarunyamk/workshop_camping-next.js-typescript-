import { categories } from "@/utils/category"
import Link from "next/link"

const CategoryList = ({ search, category }: { search?: string, category?: string }) => {

    const searchTerm = search ? `&search=${search}` : ''

    return (
        <div>
            <div className="flex justify-center my-4 gap-6 font-bold">
                {
                    categories.map((item) => {

                        const isActive = item.label === category

                        return (
                            <Link key={item.label} href={`/?category=${item.label}${searchTerm}`}>
                                <article className={`flex flex-col gap-2 p-2 justify-center items-center
                                            hover:text-primary hover:scale-105 hover:duration300 ${isActive ? 'text-primary' : ''}`}>
                                    <item.icon />
                                    <p>
                                        {item.label}
                                    </p>
                                </article>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList
