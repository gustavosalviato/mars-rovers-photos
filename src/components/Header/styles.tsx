import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
    width: '100%',
    maxWidth: '1180px',
    padding: '3.2rem 1.6rem ',
    margin: '0 auto',
    backgroundColor: '$gray900',
    borderRadius: '6px',

    display: 'flex',
    justifyContent: 'space-between',

    strong:{
        fontSize: '2.4rem',
        color: '$gray100',
    }
})