import Image from 'next/image'
import React, { CSSProperties } from 'react';
import {
    Button,
    Container,
    RevealContainer,
    Title,
    Text,
    TechsContainer,
    TechsImageContainer,
    ImageContainer
} from './styles';

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
    techs: string[];
}

function handleVisitPage(url: string) {
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
    pageUrl,
    techs
}: PortfolioCardProps) {
    return (
        <Container>
            <ImageContainer
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
                </RevealContainer>
                <Button onClick={() => handleVisitPage(pageUrl!)}>
                    Visitar página
                </Button>
            </ImageContainer>

            <TechsContainer>
                <Text>Tecnologias utilizadas</Text>
                <TechsImageContainer>
                    {techs.map(tech => (
                        <Image
                            key={tech}
                            src={tech}
                            width={40}
                            height={40}
                            alt={tech}
                        />
                    ))}
                </TechsImageContainer>
            </TechsContainer>
        </Container>
    )
}