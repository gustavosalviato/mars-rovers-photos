import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',

  width: '100%',
  maxWidth: '1180px',
  padding: '3.2rem 1.6rem ',
  margin: '0 auto',
  borderRadius: '6px',

  strong: {
    fontSize: '3.2rem',
  },

  svg: {
    color: '$yellow',
  },
})
