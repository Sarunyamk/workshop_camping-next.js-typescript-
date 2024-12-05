import {z,ZodSchema} from "zod"

// สร้าง schema สำหรับการตรวจสอบข้อมูลและตัวที่สองหมายถึง message ที่จะโชว์
// const profileSchema = z.string().min(2, { message: 'ตัวเลขมากกว่าสองงง' })

export const profileSchema = z.object({
    firstName : z.string().min(2, { message: 'ชื่อตัวเลขมากกว่าสองงง' }),
    lastName : z.string().min(2, { message: 'นามสกุลลตัวเลขมากกว่าสองงง' }),
    userName : z.string().min(2, { message: 'ยูสเซอรเนทม ตัวเลขมากกว่าสองงง' })
})




export const validateWithZod = <T>(schema:ZodSchema<T>,data:unknown):T=>{
const result = schema.safeParse(data)
if(!result.success){
    //map เข้าไปให้ถึง error
    const errors = result.error?.errors.map((error)=>error.message)
    throw new Error(errors.join(','))
}
return result.data
}