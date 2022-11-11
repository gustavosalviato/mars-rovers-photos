import { PhotoCardContainer, } from "./styles"

interface PhotoCardProps {
    className: string;
}

export const PhotoCard = ({ className }: PhotoCardProps) => {
    return (
        <PhotoCardContainer className={className}>
            <img src="https://images.unsplash.com/photo-1630694093867-4b947d812bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80" width={520} height={500} alt="" />

            <footer>
                <strong>Teste</strong>
                <span>Teste</span>
            </footer>
        </PhotoCardContainer>
    )
}