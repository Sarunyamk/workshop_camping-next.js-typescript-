'use client'
import { SignOutButton } from '@clerk/nextjs'
import { useToast } from "@/hooks/use-toast"


const SignOut = () => {

    const { toast } = useToast()

    const handleLogout = () => {
        toast({
            title: 'Logout',
            description: 'Logout Successfully'
        })
    }

    return (
        <SignOutButton redirectUrl='/'>
            <button onClick={handleLogout} className='w-full text-left'>
                Logout
            </button>
        </SignOutButton>
    )
}

export default SignOut
