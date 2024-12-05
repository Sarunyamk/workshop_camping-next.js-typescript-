
import { createProfileAction } from "@/actions/action"
import { SubmitButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"



const CreateProfile = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8">New User</h1>
            <div className="border-2 p-8 rounded-lg ">
                <FormContainer action={createProfileAction}>
                    <div className="grid md:grid-cols-2 gap-2">
                        <FormInput name="firstName" label="First Name" type="text" placeholder="First Name" />
                        <FormInput name="lastName" label="Last Name" type="text" placeholder="Last Name" />
                        <FormInput name="userName" label="Username" type="text" placeholder="Username" />
                    </div>
                    <SubmitButton text="Create Profile" size="lg" />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateProfile
