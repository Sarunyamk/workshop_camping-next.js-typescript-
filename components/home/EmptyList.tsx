import Link from "next/link"
import { Button } from "../ui/button"

type emptyListProps = {
    heading?: string,
    message?: string,
    btnText?: string
}

const EmptyList = ({ heading = 'No Items', message = 'Please try again', btnText = 'Back home' }: emptyListProps) => {
    return (
        <div>
            <h2 className="text-xl font-bold">{heading}</h2>
            <p className="text-lg font-bold mb-4">{message}</p>
            <Button asChild>
                <Link href={'/'}>
                    {btnText}
                </Link>
            </Button>
        </div>
    )
}

export default EmptyList
