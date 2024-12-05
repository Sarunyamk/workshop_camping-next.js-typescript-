
'use client'

import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";

type formContainerProps = {
    children: React.ReactNode
    action: actionFunction
}




const initialState = {
    message: ''
}

const FormContainer = (props: formContainerProps) => {
    const { toast } = useToast()
    const { children, action } = props;
    //state เป็นของที่จะ return ออกมาจาก function ถ้าstateค่าถูกเปลี่ยนจะรันใหม่ 
    const [state, formAction] = useActionState(action, initialState)

    useEffect(() => {
        if (state.message) {
            toast({
                description: state.message
            })
        }
    }, [state])

    return (
        <form action={formAction}>
            {children}
        </form>
    )
}

export default FormContainer
