import React, { Dispatch, SetStateAction } from 'react';
import { Container } from './styles';
import Image from 'next/image'

interface SkillCardImageProps {
    imgUrl: string;
    imgAlt: string;
    className?: string;
    imgClassName?: string;
    onMouseEnter?: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<string>>[]
    onMouseLeave?: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<string>>[]
}

export function SkillCardImage({
    imgUrl,
    imgAlt,
    className,
    imgClassName,
    onMouseEnter,
    onMouseLeave
}: SkillCardImageProps) {
    return (
        <Container
            className={className}
            onMouseEnter={onMouseEnter as never}
            onMouseLeave={onMouseLeave as never}
        >
            <Image
                width={64}
                height={64}
                quality={100}
                src={imgUrl}
                alt={imgAlt}
                className={imgClassName}   
                style={{borderRadius: '4px'}}
                />
        </Container>
    )
}