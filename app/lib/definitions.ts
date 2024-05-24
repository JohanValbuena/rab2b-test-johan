export interface TextItemListProps {
    text: string,
    color?: string,
}

export interface TextListProps {
    list: Array<TextItemListProps> | undefined;
}

export interface CardProps {
    icon: string;
    width: number;
    height: number;
    alt: string;
    title: string;
    backText: string;
    list: Array<TextItemListProps>;
}

export interface CardsContainerProps {
    cards: Array<CardProps> | undefined;
}

export interface ImageInterface{
    width: number;
    height: number;
    alt: string;
    src: string;
    styles: string;
}

export interface ImagesCollageProps {
    images: Array<ImageInterface>
}

export interface ModuleTwoData {
    title: string;
    list: Array<TextItemListProps>;
    images: Array<ImageInterface>
}

export interface TextModuleTwoProps {
    title: string | undefined;
    list: Array<TextItemListProps> | undefined ;
}