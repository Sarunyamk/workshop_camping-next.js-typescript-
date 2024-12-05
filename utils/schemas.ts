import { z, ZodSchema } from "zod"
// สร้าง schema สำหรับการตรวจสอบข้อมูลและตัวที่สองหมายถึง message ที่จะโชว์
// const profileSchema = z.string().min(2, { message: 'ตัวเลขมากกว่าสองงง' })

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: 'ชื่อตัวเลขมากกว่าสองงง' }),
    lastName: z.string().min(2, { message: 'นามสกุลลตัวเลขมากกว่าสองงง' }),
    userName: z.string().min(2, { message: 'ยูสเซอรเนทม ตัวเลขมากกว่าสองงง' })
})

const validateImage = () => {
    const maxFileSize = 1024 * 1024
    return z.instanceof(File)
        .refine((file) => {
            return file.size <= maxFileSize
        }, { message: 'File size must be less than 1MB' })
}

export const imageSchema = z.object({
    image: validateImage()
})

export const landMarkSchema = z.object({
    name: z.string().min(2, { message: 'ชื่อต้องมากกว่า 2 ตัวอักษร' }),
    category: z.string(),
    description: z.string().min(2, { message: 'คำอธิบายต้องมากกว่า 2 ตัวอักษร' })
        .max(200, { message: 'คำอธิบายต้องน้อยกว่า 200 ตัวอักษร' }),
    //coerce แปลงข้อมูลเป็นตัวเลข
    price: z.coerce.number().int().min(0, { message: 'ราคาต้องเป็นตัวเลขบวก' }),
    province: z.string(),
    lat: z.coerce.number(),
    lng: z.coerce.number(),
})


export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        //map เข้าไปให้ถึง error
        const errors = result.error?.errors.map((error) => error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}