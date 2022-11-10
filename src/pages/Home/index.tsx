import { ButtonSubmit } from "../../components/ButtonSubmit"
import { Input } from "../../components/Input"
import { FormInputContainer, HomeContainer, Teste } from "./styles"

export const Home = () => {
    return (
        <>
            <Teste>
                <FormInputContainer>
                    <Input />
                    <ButtonSubmit />
                </FormInputContainer>
                <div>
                    <div>..</div>
                    <div>..</div>
                    <div>..</div>
                </div>
            </Teste>
            <HomeContainer>
            </HomeContainer>
        </>
    )
}