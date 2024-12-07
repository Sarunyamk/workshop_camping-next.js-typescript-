'use client'

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";
import { RefreshCw, RotateCw, Heart } from 'lucide-react';
import { SignInButton } from "@clerk/nextjs";



type btnSize = 'default' | 'sm' | 'lg' | 'icon'

type SubmitButtonProps = {

    className?: string
    size?: btnSize
    text?: string
};

export const SubmitButton = (props: SubmitButtonProps) => {
    const { className, size, text } = props;
    const { pending } = useFormStatus()

    return (
        <Button className={className} size={size} type="submit" disabled={pending}>
            {
                pending
                    ? <>
                        <RefreshCw className="animate-spin" />
                        <span>Please wait....</span>
                    </>
                    : <p>{text}</p>
            }
        </Button>
    )

}

export const SignInCardButton = () => {
    return (
        <SignInButton mode="modal">

            <Button size={"icon"} variant={"outline"}>
                <Heart />
            </Button>
        </SignInButton>
    )
}

export const CardSubmitButton = ({ isFavoriteId }: { isFavoriteId: boolean }) => {

    const { pending } = useFormStatus()

    return (
        <Button type="submit" size="icon" variant="outline">
            {
                pending
                    ? <RotateCw className="animate-spin" />
                    : <Heart fill={isFavoriteId ? 'red' : 'none'} />
            }
        </Button>
    )

}