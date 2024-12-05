// รวบรวม file action ฝั่ง server
'use server'

import { imageSchema, landMarkSchema, profileSchema, validateWithZod } from "@/utils/schemas"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import db from '@/utils/db'
import { redirect } from "next/navigation"

//เชคว่า User login หรือยัง
const getAuthUser = async () => {

    const user = await currentUser()
    //ถ้าไม่มี profile หรือถ้าไม่ได้ลอคอิน ให้โยน error ออกไป 
    if (!user) {
        throw new Error('You must loggin!!!')
    }

    //ถ้าไม่มีโปรไฟล์ จะรีไดเรคไปหน้า create
    if (!user.privateMetadata.hasProfile) {
        redirect('/profile/create')
    }
    return user
}



const renderError = (error: unknown): { message: string } => {
    return { message: error instanceof Error ? error.message : 'An Error !!!' }
}


export const createProfileAction = async (prevState: any, formData: FormData) => {
    // const firstName = formData.get('firstName') as string
    //เอาของออกมาจาก name ที่ formdata ที่ส่งมาจาก form
    try {
        const user = await currentUser()

        if (!user) {
            throw new Error('Please login!!!')
        }
        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(profileSchema, rawData)
        // console.log(validateField,"validateField")
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validateField
            }
        })

        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })

        // return {message : 'Create Profile Success'}
    } catch (error) {
        // console.log(error)
        return renderError(error)
    }
    redirect('/')
}



export const createLandmarkAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {

    try {
        const user = await getAuthUser()

        const rawData = Object.fromEntries(formData)
        // เอารูปออกมาจาก formdata ที่ส่งมาในชื่อ image 
        const file = formData.get('image') as File

        const validatedFile = validateWithZod(imageSchema, { image: file })
        const validateField = validateWithZod(landMarkSchema, rawData)


        console.log(validatedFile, "validateField")
        console.log(file, "file")

        return { message: 'Create Landmark Success' }
    } catch (error) {
        // console.log(error)
        return renderError(error)
    }
    // redirect('/')   
}