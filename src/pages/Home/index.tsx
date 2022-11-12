import { ButtonSubmit } from "../../components/ButtonSubmit"
import { Input } from "../../components/Input"
import { FormInputContainer, HomeContainer, FormContainer, RadioContainer, RadioItem } from "./styles"
import { Planet, FlyingSaucer, Rocket } from 'phosphor-react'
import { PhotoCard } from "../../components/PhotoCard"
import { useKeenSlider } from 'keen-slider/react'
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider } from 'react-hook-form'


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

    const { register, handleSubmit, control } = newSearchForm

    const handleNewSearchForm = (data: FormData) => {
        console.log(data)
    }

    return (
        <>
            <FormProvider {...newSearchForm}>
                <FormContainer onSubmit={handleSubmit(handleNewSearchForm)}>

                    <Controller
                        control={control}
                        name="roverType"
                        render={({ field }) => {

                            return (
                                <RadioContainer
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <RadioGroup.Item asChild value="curiosity" >
                                        <RadioItem iconColor={"yellow"}>

                                            <header>
                                                <span>
                                                    rover #1
                                                </span>

                                                <FlyingSaucer size={32} />
                                            </header>

                                            <strong>Curiosity</strong>
                                        </RadioItem>

                                    </RadioGroup.Item>

                                    <RadioGroup.Item asChild value="opportunity" >
                                        <RadioItem iconColor={"gray"}>

                                            <header>
                                                <span>
                                                    rover #2
                                                </span>

                                                <Planet size={32} />
                                            </header>

                                            <strong>Opportunity</strong>
                                        </RadioItem>

                                    </RadioGroup.Item>


                                    <RadioGroup.Item asChild value="spirit"  >
                                        <RadioItem iconColor={"red"}>

                                            <header>
                                                <span>
                                                    rover #3
                                                </span>

                                                <Rocket size={32} />
                                            </header>

                                            <strong>Spirit</strong>
                                        </RadioItem>
                                    </RadioGroup.Item>
                                </RadioContainer>
                            )
                        }}
                    />



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