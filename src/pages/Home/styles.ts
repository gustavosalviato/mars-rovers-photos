import { styled } from "../../styles";
import * as RadioGroup from '@radix-ui/react-radio-group';


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


export const RadioContainer = styled(RadioGroup.Root, {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.6rem',
    gap: '3.2rem',
})

export const RadioItem = styled('div', {

    variants: {
        iconColor: {
            gray: {
                svg: {
                    color: '$gray100',
                }
            },

            yellow: {
                svg: {
                    color: '$yellow',
                }
            },

            red: {
                svg: {
                    color: '$redDark',
                }
            }
        }
    },

    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    padding: '2.4rem 3.2rem',
    backgroundColor: '$gray400',
    borderRadius: '6px',
    width: '30rem',
    cursor: 'pointer',

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

    '&[data-state="checked"]': {
        backgroundColor: '$yellowLight',
        border: '2px solid $yellowDark',
        color: '$yellow',

        span:{
            color: 'inherit',
        },

        svg:{
            color: 'inherit',
        }
    }
})