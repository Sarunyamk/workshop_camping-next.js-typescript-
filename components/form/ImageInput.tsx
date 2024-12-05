import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ImageInput = () => {

    const name = 'image'

    return (
        <div>
            <Label className="capitalize">
                {name}
            </Label>
            <Input
                id={name} name={name}
                type='file' required
                accept="image/*" />
        </div>
    )
}

export default ImageInput
