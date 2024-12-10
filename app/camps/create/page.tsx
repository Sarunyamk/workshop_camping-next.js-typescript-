
import { createLandmarkAction } from "@/actions/action"
import { SubmitButton } from "@/components/form/Buttons"
import CategoryInput from "@/components/form/CategoryInput"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import ImageInput from "@/components/form/ImageInput"
import ProvinceInput from "@/components/form/ProvinceInput"
import TextAreaInput from "@/components/form/TextAreaInput"
import MapLandmark from "@/components/map/MapLandmark"



const CreateProfile = async () => {


    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8">Create Landmark</h1>
            <div className="border-2 p-8 rounded-lg ">
                <FormContainer action={createLandmarkAction}>
                    <div className="grid md:grid-cols-2 gap-2">
                        <FormInput
                            name="name" label="Landmark Name"
                            type="text" placeholder="Landmark Name" />
                        <CategoryInput />
                    </div>
                    <TextAreaInput name="description" />
                    <div className="grid md:grid-cols-2 gap-2">
                        <FormInput
                            name="price" label="Price"
                            type="number" placeholder="Price" />
                        <ProvinceInput />
                    </div>
                    <ImageInput />
                    <MapLandmark location={{ lat: 15, lng: 100 }} />
                    <SubmitButton text="Create Landmark" size="lg" />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateProfile
