import { EmptyContainer } from './styles'
import { ClipboardText } from 'phosphor-react'
export const Empty = () => {
  return (
    <EmptyContainer>
      <ClipboardText size={56} />

      <strong>Você ainda não listou fotos de Marte</strong>
      <span>Preencha as informações para listar fotos de Marte 🚀</span>
    </EmptyContainer>
  )
}
