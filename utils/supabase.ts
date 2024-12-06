import { createClient } from '@supabase/supabase-js'

const bucket_name = 'landmarkBucket'
const url = process.env.SUPABASE_URL as string
const key = process.env.SUPABASE_KEY as string

// Create Supabase client
const supabase = createClient(url, key)

// Upload file using standard upload
export async function uploadFile(image: File) {

    const timeStamp = Date.now()
    const newName = `${timeStamp}-${image.name}`

    const { data, error } = await supabase.storage
        .from(bucket_name).upload(newName, image)
    if (!data) {
        throw new Error("Error uploading file")
        //         const { data } = supabase.storage.from(bucket_name).getPublicUrl(newName)

        // console.log(data.publicUrl)

    }
    return supabase.storage.from(bucket_name).getPublicUrl(newName).data.publicUrl
}
