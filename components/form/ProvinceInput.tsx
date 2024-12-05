import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { provinces } from "@/utils/province"

const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {

    const name = "province"

    return (
        <div className="mb-4">
            <Label htmlFor={name} className="capitalize">
                {name}
            </Label>
            <Select name={name} required defaultValue={defaultValue || provinces[0].PROVINCE_NAME}>
                <SelectTrigger >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        provinces.map((item) => {
                            return (

                                <SelectItem value={item.PROVINCE_NAME} key={item.PROVINCE_ID}>
                                    <span className="capitalize flex items-center">
                                        {item.PROVINCE_NAME}
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

export default ProvinceInput
