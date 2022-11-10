import { styled } from "../../styles";

export const InputWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    gap: '0.4rem'
})

export const InputStyledContainer = styled('div', {
    display: 'flex',
    height: '4.2rem',
    borderRadius: '4px',
    border: '2px solid transparent',
    backgroundColor: '$gray900',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: '0.8rem',

    '&:focus-within': {
        borderColor: '$yellow',
    }
})


export const InputStyled = styled('input', {
    flex: '1',
    height: '100%',
    background: 'none',
    outlineWidth: 0,
    border: 'none',
    color: '$gray100',
    fontSize: '1.6rem',

    '&:placeholder': {
        color: 'gray500'
    }
})