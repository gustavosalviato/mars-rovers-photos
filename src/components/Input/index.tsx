import { InputStyledContainer, InputWrapper, InputStyled } from './styles'
import { useFormContext } from 'react-hook-form'
export const Input = () => {
  const { register } = useFormContext()

  return (
    <InputWrapper>
      <InputStyledContainer>
        <InputStyled
          type="date"
          placeholder="Informe um data"
          {...register('query')}
        />
      </InputStyledContainer>
    </InputWrapper>
  )
}
