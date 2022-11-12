import { styled } from "../../styles";



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




