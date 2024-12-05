import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type TextAreaInputProps = {
    name: string
    labelText?: string
    defaultValue?: string
}

const TextAreaInput = ({ name, labelText, defaultValue }: TextAreaInputProps) => {


    return (
        <div className="mb-4">
            <Label htmlFor={name} className="capitalize">
                {labelText || name}
            </Label>
            <Textarea
                id={name} name={name}
                defaultValue={defaultValue} rows={5} required />
        </div>
    )
}

export default TextAreaInput
