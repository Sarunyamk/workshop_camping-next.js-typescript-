
import { createLandmarkAction } from "@/actions/action"
import { SubmitButton } from "@/components/form/Buttons"
import CategoryInput from "@/components/form/CategoryInput"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"



const CreateProfile = async () => {


    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8">Create Landmark</h1>
            <div className="border-2 p-8 rounded-lg ">
                <FormContainer action={createLandmarkAction}>
                    <div className="grid md:grid-cols-2 gap-2">
                        <FormInput name="name" label="Landmark Name" type="text" placeholder="Landmark Name" />
                        <CategoryInput />
                    </div>
                    <SubmitButton text="Create Landmark" size="lg" />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateProfile
