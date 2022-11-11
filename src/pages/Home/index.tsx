import { ButtonSubmit } from "../../components/ButtonSubmit"
import { Input } from "../../components/Input"
import { FormInputContainer, HomeContainer, FormContainer, RadioContainer, RadioItem } from "./styles"
import { Planet, FlyingSaucer, Rocket } from 'phosphor-react'
import { PhotoCard } from "../../components/PhotoCard"
import { useKeenSlider } from 'keen-slider/react'


export const Home = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48,
        }
    })
    return (
        <>
            <FormContainer>

                <RadioContainer>
                    <RadioItem>
                        <header>
                            <span>
                                rover #1
                            </span>

                            <Planet size={32} />
                        </header>

                        <strong>Curiosity</strong>
                    </RadioItem>

                    <RadioItem>
                        <header>
                            <span>
                                rover #1
                            </span>

                            <Rocket size={32} />
                        </header>

                        <strong>Curiosity</strong>
                    </RadioItem>

                    <RadioItem>
                        <header>
                            <span>
                                rover #1
                            </span>

                            <FlyingSaucer size={32} />
                        </header>

                        <strong>Curiosity</strong>
                    </RadioItem>
                </RadioContainer>

                <FormInputContainer>
                    <Input />
                    <ButtonSubmit />
                </FormInputContainer>
            </FormContainer>


            <HomeContainer ref={sliderRef} className="keen_slider">
                <PhotoCard className="keen-slider__slide" />
                <PhotoCard className="keen-slider__slide" />
                <PhotoCard className="keen-slider__slide" />
                <PhotoCard className="keen-slider__slide" />
            </HomeContainer>
        </>
    )
}