'use client'

import { toggleFavoriteAction } from '@/actions/action'
import FormContainer from '../form/FormContainer'
import { usePathname } from 'next/navigation'
import { CardSubmitButton } from '../form/Buttons'

const FavoriteToggleForm = ({ favoriteId, landmarkId }: { favoriteId: string | null, landmarkId: string }) => {

    // จะเป็น path ที่อยู่ของหน้านี้ จะส่งเพื่อเอาไป redirect ข้อมูลจะได้อัพเดท
    const pathName = usePathname()

    //blind การสร้าง. FUNCTION ใหม่
    const toggleAction = toggleFavoriteAction.bind(null, { favoriteId, landmarkId, pathName })

    return (

        <FormContainer action={toggleAction}>
            <CardSubmitButton isFavoriteId={favoriteId ? true : false} />
        </FormContainer>

    )
}

export default FavoriteToggleForm
