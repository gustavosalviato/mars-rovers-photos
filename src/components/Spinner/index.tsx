import { SpinnerContainer } from './styles'
import { CircularProgress } from '@mui/material'

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <CircularProgress size={38} />
    </SpinnerContainer>
  )
}
