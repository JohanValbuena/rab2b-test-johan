import Text from "../../atoms/text/text";
import Separator from "../../atoms/separator/separator";
import TextList from "../../molecules/text-list/text-list";

import { TextModuleTwoProps } from "@/app/lib/definitions";

export default function TextModuleTwo({ title, list }: Readonly<TextModuleTwoProps>) {
    return (
        <>
            <Text heading="title" color="white" className="module-two-title" text={title} />
            <Separator />
            <TextList list={list} />
        </>
    )
}