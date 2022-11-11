import { HeaderContainer } from "./styles";
import { Rocket } from 'phosphor-react'
export const Header = () => (
    <HeaderContainer>
        <Rocket size={48} />
        <strong>Mars Rovers Photos</strong>
    </HeaderContainer>
)