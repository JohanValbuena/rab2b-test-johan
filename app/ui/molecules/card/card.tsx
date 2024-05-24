import Text from "../../atoms/text/text"
import Image from "next/image"
import styles from './card.module.scss'
import TextList from "../text-list/text-list"
import { CardProps } from "@/app/lib/definitions"

export function Card({ alt, height, icon, list, title, width, backText }: Readonly<CardProps>) {

    return (
        <div className={styles.card} >
            <div className={styles.cardInner}>
                <div className={styles.front}>
                    <Image
                        src={icon}
                        width={width}
                        height={height}
                        alt={alt}
                    />
                    <Text heading="subtitle" text={title} className="margin_bottom" />
                    <TextList list={list} />
                </div>
                <div className={styles.back}>
                    <Text heading="subtitle" text={backText} className="back_card" />
                </div>
            </div>
        </div>
    )
}