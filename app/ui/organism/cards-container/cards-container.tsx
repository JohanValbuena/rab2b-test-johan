import "./cards-container.scss"
import { CardsContainerProps } from "@/app/lib/definitions"
import { Card } from "../../molecules/card/card"

export function CardsContainer({ cards }: Readonly<CardsContainerProps>) {
    return (
        <div className="container">
            {
                cards?.map(card => (
                    <Card key={card.title} {...card}></Card>
                ))
            }
        </div>

    )
}