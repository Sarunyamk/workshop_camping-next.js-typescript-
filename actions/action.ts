// รวบรวม file action ฝั่ง server
'use server'

import { imageSchema, landMarkSchema, profileSchema, validateWithZod } from "@/utils/schemas"
import { clerkClient, currentUser, getAuth } from "@clerk/nextjs/server"
import db from '@/utils/db'
import { redirect } from "next/navigation"
import { uploadFile } from "@/utils/supabase"
import { revalidatePath } from "next/cache"

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

        const fullPath = await uploadFile(validatedFile.image)
        console.log(fullPath, "fullPath")

        await db.landmark.create({
            data: {
                ...validateField,
                image: fullPath,
                profileId: user.id
            }
        })


        // return { message: 'Create Landmark Success' }
    } catch (error) {
        // console.log(error)
        return renderError(error)
    }
    redirect('/')
}


//fetch data in database
// เดี๋ยวต้องรับ พารามิดตอร์เพื่อ search ข้อมูล
export const fetchLandmarks = async () => {
    const landmarks = await db.landmark.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return landmarks
}

export const fetchFavoriteId = async ({ landmarkId }: { landmarkId: string }) => {

    const user = await getAuthUser()

    const favorite = await db.favorite.findFirst({
        where: {
            landmarkId: landmarkId,
            profileId: user.id
        }, select: {
            id: true
        }
    })
    return favorite?.id || null
}

export const toggleFavoriteAction = async (prevState: { favoriteId: string | null, landmarkId: string, pathName: string }) => {

    const { favoriteId, landmarkId, pathName } = prevState

    const user = getAuthUser()

    try {
        // ถ้ากด favorite อยู่แล้ว delete
        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId
                }
            })
        }
        //ถ้าไม่เคยกดจะ create
        else {
            await db.favorite.create({
                data: {
                    landmarkId,
                    profileId: (await user).id
                }
            })
        }

        //revalidatePath เอาไปใช้ที่ client เพื่อให้มันอัพเดทข้อมูลที่มีอยู่ใหม่
        revalidatePath(pathName)

        return { message: favoriteId ? "Remove Favorite Success" : "Add Favorite Success" }
    } catch (error) {
        return renderError(error)
    }


}

export const fetchFavoriteUser = async () => {
    const user = await getAuthUser()
    const favorites = await db.favorite.findMany({
        where: {
            profileId: user.id
        },
        select: {
            landmark: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                    description: true,
                    price: true,
                    province: true,
                    lat: true,
                    lng: true,
                    category: true,
                }
            }
        }
    })
    return favorites.map((favorite) => favorite.landmark)
}