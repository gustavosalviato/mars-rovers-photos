import { Header } from "../../components/Header"
import { DefaultContainer } from "./styles"
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
    return (
        <DefaultContainer>
            <Header />
            <Outlet />
        </DefaultContainer>
    )
}