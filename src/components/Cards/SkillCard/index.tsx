import Image from 'next/image'
import React, { CSSProperties } from 'react';
import { Text, Container } from './styles';

interface SkillCardProps {
    title?: string;
    content?: string;
    imageUrl: string;
    imgWidth: number;
    imgHeight: number;
    cardStyle?: CSSProperties;
    cardClassName?: string;
    titleStyle?: CSSProperties;
    titleClassName?: string;
    contentStyle?: CSSProperties;
    contentClassName?: string;
    pageUrl?: string;
}

export function SkillCard({
    cardClassName,
    cardStyle,
    contentClassName,
    contentStyle,
    imageUrl,
    imgHeight,
    imgWidth,
    title,
    titleClassName,
    titleStyle,
    content,
    pageUrl
}: SkillCardProps) {
    return (
        <Container
            style={cardStyle}
            className={cardClassName}
        >

            <Image
                src={imageUrl}
                width={imgWidth}
                height={imgHeight}
                alt='Pablo Silva Dev'
            />
            <Text
                className={titleClassName}
                style={titleStyle}
            >
                {content}
            </Text>
        </Container>
    )
}