import React, { CSSProperties } from 'react';
import { NextImage as NextImageComponent, Container } from './styles';
import { name } from '../../../../package.json'

interface NextImageProps {
    imgUrl: string;
    width: number;
    height: number;
    style?: CSSProperties;
    className?: string;
}

export function NextImage({
    imgUrl,
    width,
    height,
    style,
    className
}: NextImageProps) {
    return (
        <Container>
            <NextImageComponent
                src={imgUrl}
                alt={name}
                width={width}
                height={height}
                style={style}
                className={className}
            />
        </Container>
    )
}