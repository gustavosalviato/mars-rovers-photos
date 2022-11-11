import { styled } from "../../styles";

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
        }
    },

    '&:hover': {
        footer: {
            opacity: 1,
            transform: 'translateY(0%)',
        },

        borderColor: '$gray500'
    }

})

