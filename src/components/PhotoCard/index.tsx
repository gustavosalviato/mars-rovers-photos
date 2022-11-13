import { RoverPhoto } from '../../pages/Home'
import {
  BodyContainer,
  Footer,
  PhotoCardContainer,
  PhotoCardContent,
  Status,
} from './styles'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PhotoCardProps {
  rover: RoverPhoto
  className: string
}

export const PhotoCard = ({ rover, className }: PhotoCardProps) => {
  return (
    <PhotoCardContainer className={className}>
      <img src={rover.image} width={520} height={400} alt="" />

      <PhotoCardContent>
        <header>
          <strong>{`Tirada por ${rover.cameraName}`}</strong>

          <p>
            {formatDistanceToNow(new Date(rover.data), {
              locale: ptBR,
              addSuffix: true,
            })}
          </p>
        </header>

        <BodyContainer>
          <strong>{rover.roverName}</strong>
          <Status
            statusColor={rover.roverStatus === 'active' ? 'active' : 'complete'}
          >
            {rover.roverStatus}
          </Status>
        </BodyContainer>

        <Footer>
          <div>
            <span>Data de lançamento</span>
            <p>
              {format(new Date(rover.launchDate), `dd 'de' MMMM, 'de' yyyy`, {
                locale: ptBR,
              })}
            </p>
          </div>

          <div>
            <span>Data de pouso</span>
            <p>
              {format(new Date(rover.landingDate), `dd 'de' MMMM, 'de' yyyy`, {
                locale: ptBR,
              })}
            </p>
          </div>
        </Footer>
      </PhotoCardContent>
    </PhotoCardContainer>
  )
}
