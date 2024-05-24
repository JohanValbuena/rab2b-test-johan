"use client";
import Image from "next/image";
import styles from './images-collage.module.scss';
import clsx from "clsx";
import React from "react";
import { ImagesCollageProps } from "@/app/lib/definitions";
export default function ImagesCollage({ images }: Readonly<ImagesCollageProps>) {
    const [isImageLoading, setIsImageLoading] = React.useState(true);
    const returnClass = (className: string) => {
        const classes = {
            "center": styles.elContainer,
            "one": styles.oneContainer,
            "two": styles.twoContainer,
            "three": styles.threeContainer,
            "four": styles.fourContainer,
            "default": styles.elContainer
        };

        return (classes as any)[className || 'default'];
    };

    return (
        < >
            {images?.map(image => (
                <div key={image.alt} className={clsx(returnClass(image.styles), styles.imagesContainer,
                    isImageLoading === true && styles.blur, isImageLoading === false && styles.removeBlur
                )}>
                    <Image onLoad={() => setIsImageLoading(false)}
                        placeholder="blur" blurDataURL={image.src} className={styles.images} src={image.src} width={image.width} height={image.height} alt={image.alt} />
                </div>
            ))}
        </>
    )
}