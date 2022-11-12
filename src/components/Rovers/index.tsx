import { FlyingSaucer, Planet, Rocket } from "phosphor-react"
import { Controller } from "react-hook-form"
import { useFormContext } from 'react-hook-form'
import { RadioContainer, RadioItem } from "./styles"
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Rovers = () => {

    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name="roverType"
            render={({ field }) => {

                return (
                    <RadioContainer
                        onValueChange={field.onChange}
                        value={field.value}
                    >
                        <RadioGroup.Item asChild value="curiosity" >
                            <RadioItem iconColor={"yellow"}>

                                <header>
                                    <span>
                                        rover #1
                                    </span>

                                    <FlyingSaucer size={32} />
                                </header>

                                <strong>Curiosity</strong>
                            </RadioItem>

                        </RadioGroup.Item>

                        <RadioGroup.Item asChild value="opportunity" >
                            <RadioItem iconColor={"gray"}>

                                <header>
                                    <span>
                                        rover #2
                                    </span>

                                    <Planet size={32} />
                                </header>

                                <strong>Opportunity</strong>
                            </RadioItem>

                        </RadioGroup.Item>


                        <RadioGroup.Item asChild value="spirit"  >
                            <RadioItem iconColor={"red"}>

                                <header>
                                    <span>
                                        rover #3
                                    </span>

                                    <Rocket size={32} />
                                </header>

                                <strong>Spirit</strong>
                            </RadioItem>
                        </RadioGroup.Item>
                    </RadioContainer>
                )
            }}
        />
    )
}