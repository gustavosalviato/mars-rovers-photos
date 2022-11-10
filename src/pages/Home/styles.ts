import { render } from "react-dom";
import { styled } from "../../styles";

export const HomeContainer = styled('main', {
    
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: '65.6rem',
    padding: '0.4rem',
    background: 'red',
})

export const Teste = styled('form',{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    width: '100%',
    maxWidth: '1200px',
    margin: '3.2rem auto 0',
    padding: '0 0.4rem',
    })

export const FormInputContainer = styled('main', {
    display: 'flex',
    gap: '0.8rem',
    width: '100%',
    maxWidth: '1200px',
    margin: '3.2rem auto 0',
    padding: '0 0.4rem',
})
