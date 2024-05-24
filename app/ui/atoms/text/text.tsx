import "./text.scss"

interface TextProps {
    heading: 'title' | 'subtitle' | 'content' | undefined;
    text: string | undefined;
    color?: "white";
    className?: "margin_bottom" | "module-one-title" | "module-two-title" | "back_card";
}

export default function Text({ heading, text, color, className }: Readonly<TextProps>) {

    return (
        <>
            {heading === 'title' && <h1 className={`${color ?? ""} ${className ?? ""}`}> {text} </h1>}
            {heading === 'subtitle' && <h2 className={`${color ?? ""} ${className ?? ""}`}> {text} </h2>}
            {heading === 'content' && <p className={`${color ?? ""} ${className ?? ""}`}> {text} </p>}
        </>
    )
}

