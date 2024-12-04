import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const createProfileAction = async (formData: FormData) => {
    'use server'
    //เอาของออกมาจาก name ที่ formdata ที่ส่งมาจาก form
    const firstName = formData.get('firstName') as string
    console.log(firstName)
}




const CreateProfile = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8">New User</h1>
            <div className="border-2 p-8 rounded-lg max-w-lg">
                <form action={createProfileAction}>
                    <div className="mb-4">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input name="firstName" type="text" />
                    </div>
                    <Button type="submit">Create Profile</Button>
                </form>
            </div>
        </section>
    )
}

export default CreateProfile
