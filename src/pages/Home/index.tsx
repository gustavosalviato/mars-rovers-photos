import { ButtonSubmit } from '../../components/ButtonSubmit'
import { Input } from '../../components/Input'
import { FormInputContainer, HomeContainer, FormContainer } from './styles'
import { useKeenSlider } from 'keen-slider/react'
import * as z from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Rovers } from '../../components/Rovers'
import { useCallback, useState } from 'react'
import { api } from '../../api/axios'
import { Spinner } from '../../components/Spinner'
import { Empty } from '../../components/Empty'
import { PhotoCard } from '../../components/PhotoCard'

const API_KEY = import.meta.env.VITE_SECRET_KEY

const QueryFormValidationSchema = z.object({
  query: z.string(),
  roverType: z.enum(['curiosity', 'opportunity', 'spirit']),
})

export type FormData = z.infer<typeof QueryFormValidationSchema>

export interface RoverPhoto {
  id: string
  roverName: string
  landingDate: string
  launchDate: string
  roverStatus: string
  image: string
  cameraName: string
  data: string
}

export const Home = () => {
  const [roverPhotos, setRoverPhotos] = useState<RoverPhoto[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  const newSearchForm = useForm<FormData>({
    resolver: zodResolver(QueryFormValidationSchema),
  })

  const { handleSubmit } = newSearchForm

  const fetchPhotos = useCallback(async (roverType: string, query: string) => {
    setIsLoading(true)
    try {
      const response = await api.get(
        `${roverType}/photos?earth_date=${query}&api_key=${API_KEY}`,
      )

      console.log(response.data.photos)

      const photos = response.data.photos.map((photo: any) => {
        return {
          id: photo.id,
          roverName: photo.rover.name,
          roverStatus: photo.rover.status,
          image: photo.img_src,
          cameraName: photo.camera.name,
          data: photo.earth_date,
          landingDate: photo.rover.landing_date,
          launchDate: photo.rover.launch_date,
        }
      })

      setRoverPhotos(photos)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleNewSearchForm = async (data: FormData) => {
    console.log(data)
    const { query, roverType } = data

    await fetchPhotos(roverType, query)
  }

  return (
    <>
      <FormProvider {...newSearchForm}>
        <FormContainer onSubmit={handleSubmit(handleNewSearchForm)}>
          <Rovers />

          <FormInputContainer>
            <Input />
            <ButtonSubmit />
          </FormInputContainer>
        </FormContainer>
      </FormProvider>

      {roverPhotos.length === 0 ? (
        <Empty />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <HomeContainer ref={sliderRef} className="keen_slider">
          {roverPhotos.map((rover) => (
            <PhotoCard
              className="keen-slider__slide"
              rover={rover}
              key={rover.id}
            />
          ))}
        </HomeContainer>
      )}
    </>
  )
}
