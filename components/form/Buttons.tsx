'use client'

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";
import { RefreshCw } from 'lucide-react';

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