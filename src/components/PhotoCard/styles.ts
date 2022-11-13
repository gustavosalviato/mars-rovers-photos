import { styled } from '../../styles'

export const PhotoCardContainer = styled('div', {
  background: '$gray900',
  borderRadius: '8px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  overflow: 'hidden',
  userSelect: 'none',

  border: '2px solid transparent',
  transition: 'border 0.4s',

  img: {
    objectFit: 'cover',
    borderRadius: '8px',
  },
})

export const PhotoCardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3.2rem',

  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    strong: {
      marginTop: '1.6rem',
      fontSize: '1.6rem',
      color: '$gray300',
    },

    p: {
      color: '$gray300',
      fontSize: '1.4rem',
    },
  },

  p: {
    marginTop: '1.6rem',
    fontSize: '2.0rem',
    color: '$gray300',
  },
})

export const BodyContainer = styled('div', {
  width: '100%',

  margin: '3.2rem 0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',

  strong: {
    fontSize: '3.2rem',
    color: '$yellow',
  },
})

export const Status = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  variants: {
    statusColor: {
      complete: {
        '&::before': {
          backgroundColor: '$gray100',
        },
      },

      active: {
        '&::before': {
          backgroundColor: '$green500',
        },
      },
    },
  },

  '&::before': {
    content: '',
    width: '1rem',
    height: '1rem',
    backgroundColor: 'red',
    borderRadius: '50%',
  },
})

export const Footer = styled('footer', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '3.2rem',

  p: {
    fontSize: '1.4rem',
  },
})
