import React, { CSSProperties, ReactNode } from 'react';
import Image from 'next/image'
import {
    Container,
    ImageContainer,
    ContentContainer,
    Title,
    Text,
} from './styles';

interface ImageContentCardProps {
    imgUrl: string;
    title: string;
    content: string;
    children?: ReactNode;
    cardStyle?: CSSProperties;
    cardClassName?: string;
    titleStyle?: CSSProperties;
    titleClassName?: string;
    textStyle?: CSSProperties;
    textClassName?: string;
    contentContainerStyle?: CSSProperties;
    contentContainerClassName?: string;
}

export function ImageContentCard({
    imgUrl,
    title,
    content,
    children,
    cardStyle,
    cardClassName,
    textClassName,
    textStyle,
    titleClassName,
    titleStyle,
    contentContainerStyle,
    contentContainerClassName,
}: ImageContentCardProps) {
    return (
        <Container
            style={cardStyle}
            className={cardClassName}
        >
            <ImageContainer>
                <Image
                    src={imgUrl}
                    width={320}
                    height={240}
                    alt='psd'
                />
            </ImageContainer>
            <ContentContainer
                className={contentContainerClassName}
                style={contentContainerStyle}
            
            >
                <Title
                    className={titleClassName}
                    style={titleStyle}
                >
                    {title}
                </Title>
                <Text
                    className={textClassName}
                    style={textStyle}
                >
                    {content}
                </Text>
            </ContentContainer>
            {children}
        </Container>
    )
}