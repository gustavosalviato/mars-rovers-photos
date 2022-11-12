import { ButtonSubmit } from "../../components/ButtonSubmit"
import { Input } from "../../components/Input"
import { FormInputContainer, HomeContainer, FormContainer } from "./styles"
import { PhotoCard } from "../../components/PhotoCard"
import { useKeenSlider } from 'keen-slider/react'
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider } from 'react-hook-form'
import { Rovers } from "../../components/Rovers"


const QueryFormValidationSchema = z.object({
    query: z.string(),
    roverType: z.enum(['curiosity', 'opportunity', 'spirit'])
})

export type FormData = z.infer<typeof QueryFormValidationSchema>


export const Home = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48,
        }
    })

    const newSearchForm = useForm<FormData>({
        resolver: zodResolver(QueryFormValidationSchema)
    })

    const { handleSubmit } = newSearchForm

    const handleNewSearchForm = (data: FormData) => {
        console.log(data)
    }

    return (
        <>
            <FormProvider {...newSearchForm}>
                <FormContainer onSubmit={handleSubmit(handleNewSearchForm)}>
                    <Rovers />

                    <FormInputContainer>
                        <Input />
                        <ButtonSubmit />
                    </FormInputContainer>
                </FormContainer>

            </FormProvider>


            <HomeContainer ref={sliderRef} className="keen_slider">
                <PhotoCard className="keen-slider__slide" />
                <PhotoCard className="keen-slider__slide" />
                <PhotoCard className="keen-slider__slide" />
                <PhotoCard className="keen-slider__slide" />
            </HomeContainer>
        </>
    )
}