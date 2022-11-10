import { styled } from "../../styles";

export const HomeContainer = styled('main', {
    marginTop: '1.2rem',
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: '65.6rem',
    padding: '0.4rem',
    background: 'red',
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
    gap: '0.4rem',
    maxWidth: '1200px',
    margin: '3.2rem auto 0',
})


export const RadioContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.6rem',
    gap: '3.2rem',
})

export const RadioItem = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    padding: '2.4rem 3.2rem',
    backgroundColor: '$gray400',
    borderRadius: '6px',
    width: '30rem',

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    strong: {
        display: 'block',
        marginTop: '1.2rem',
        fontSize: '3.2rem',
    },

    span: {
        color: '$gray300',
    },
})