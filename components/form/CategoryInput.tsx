import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { categories } from "@/utils/category"

const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {

    const name = "category"

    return (
        <div className="mb-4">
            <Label htmlFor={name} className="capitalize">
                {name}
            </Label>
            <Select name={name} required defaultValue={defaultValue || categories[0].label}>
                <SelectTrigger >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((item, index) => {
                            return (

                                <SelectItem value={item.label} key={index}>
                                    <span className="capitalize flex items-center gap-2">
                                        <item.icon className="mr-2 h-4 w-4" />
                                        {item.label}
                                    </span>
                                </SelectItem>
                            )
                        })
                    }
                </SelectContent>
            </Select>

        </div>
    )
}

export default CategoryInput
