import { AlignLeft } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import UserIcon from '../navbar/UserIcon';
import Link from 'next/link';
import { links } from '@/utils/links';

import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOut from '../navbar/SignOut';



const DropdownListMenu = () => {
    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'}>
                    <AlignLeft />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <SignedOut>
                    <DropdownMenuItem >
                        <SignUpButton mode='modal'>
                            <button>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <SignInButton mode='modal'>
                            <button>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                </SignedOut>
                <SignedIn>
                    {
                        links.map((item, index) => {
                            return (
                                <DropdownMenuItem key={index} asChild>
                                    <Link href={item.href}>{item.label}</Link>
                                </DropdownMenuItem>
                            )
                        })
                    }
                    <DropdownMenuSeparator />
                    <DropdownMenuItem >
                        <SignOut />
                    </DropdownMenuItem>
                </SignedIn>
            </DropdownMenuContent>
        </DropdownMenu>


    )
}

export default DropdownListMenu
