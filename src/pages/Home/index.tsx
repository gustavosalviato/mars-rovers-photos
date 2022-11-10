import { ButtonSubmit } from "../../components/ButtonSubmit"
import { Input } from "../../components/Input"
import { FormInputContainer, HomeContainer } from "./styles"

export const Home = () => {
    return (
        <>
            <FormInputContainer>
                <Input />
                <ButtonSubmit />
            </FormInputContainer>
            <HomeContainer>
            </HomeContainer>
        </>
    )
}