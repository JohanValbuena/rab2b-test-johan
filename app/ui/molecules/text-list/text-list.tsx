import Text from "../../atoms/text/text"

import { TextListProps } from "@/app/lib/definitions"

export default function TextList({ list }: Readonly<TextListProps>) {
    return (
        <ul>
            {list?.map((item, idx) => (
                <li key={`${item.text}-${idx}`} className={item.color}> <Text heading="content" text={item.text} /></li>
            ))}
        </ul>
    )
}