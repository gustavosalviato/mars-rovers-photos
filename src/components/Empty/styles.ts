import { styled } from '../../styles'

export const EmptyContainer = styled('section', {
  margin: '3.2rem auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  svg: {
    color: '$gray500',
  },

  strong: {
    display: 'block ',
    marginTop: '1.6rem',
    color: '$gray300',
  },

  span: {
    marginTop: '1.2rem',
    color: '$gray300',
  },
})
