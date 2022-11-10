import { ButtonSubmit } from "../../components/ButtonSubmit"
import { Input } from "../../components/Input"
import { FormInputContainer, HomeContainer, FormContainer, RadioContainer, RadioItem } from "./styles"
import { Planet, FlyingSaucer, Rocket } from 'phosphor-react'

export const Home = () => {
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
            <HomeContainer>
                
            </HomeContainer>
        </>
    )
}