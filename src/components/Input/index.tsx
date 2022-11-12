import { InputStyledContainer, InputWrapper, InputStyled } from "./styles"
import { useFormContext } from 'react-hook-form'
export const Input = () => {

    const { register } = useFormContext()

    return (
        <InputWrapper>
            <InputStyledContainer>
                <InputStyled placeholder="Informe um data" {...register('query')} />
            </InputStyledContainer>
        </InputWrapper>
    )
}