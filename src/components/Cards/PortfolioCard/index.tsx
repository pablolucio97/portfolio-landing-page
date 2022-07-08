import Image from 'next/image'
import React, { CSSProperties } from 'react';
import { Button, Container, RevealContainer, Title } from './styles';

interface PortfolioCardProps {
    title: string;
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

function handleVisitPage(url: string){
    window.open(url, '_blank');
}

export function PortfolioCard({
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
}: PortfolioCardProps) {
    return (
        <Container
            style={cardStyle}
            className={cardClassName}
        >
            <Title
                className={titleClassName}
                style={titleStyle}
            >
                {title}
            </Title>
            <Image
                src={imageUrl}
                width={imgWidth}
                height={imgHeight}
                alt='Pablo Silva Dev'
            />
            <RevealContainer>
                <Button onClick={() => handleVisitPage(pageUrl!)}>
                    Visitar página
                </Button>
            </RevealContainer>
        </Container>
    )
}