import { styled } from '../../styles'

export const HomeContainer = styled('main', {
  marginTop: '1.2rem',
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: '63.2rem',
  padding: '0.4rem',

  overflowX: 'hidden',
})

export const FormContainer = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  maxWidth: '1200px',
  margin: '3.2rem auto 0',
  padding: '0 0.6rem',
})

export const FormInputContainer = styled('main', {
  width: '100%',
  display: 'flex',
  gap: '0.8rem',
  maxWidth: '1200px',
  margin: '3.2rem auto 0',
})

export const PhotoCardContainer = styled('div', {
  background: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '8px',
  position: 'relative',
  display: 'flex',
  cursor: 'pointer',
  overflow: 'hidden',
  userSelect: 'none',

  border: '2px solid transparent',
  transition: 'border 0.4s',

  img: {
    objectFit: 'cover',
    borderRadius: '8px',
  },

  footer: {
    position: 'absolute',
    bottom: '0.4rem',
    left: '0.4rem',
    right: '0.4rem',
    padding: '3.2rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    strong: {
      fontSize: '2.0rem',
    },

    span: {
      fontSize: '2.4rem',
      color: '$yellow',
    },
  },

  '&:hover': {
    footer: {
      opacity: 1,
      transform: 'translateY(0%)',
    },

    borderColor: '$gray500',
  },
})
