export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string }>

export type landmarkCardProps = {
    id: string,
    name: string,
    image: string,
    category: string
    province: string,
    price: number,
    lat: number,
    lng: number,
    description: string,
}