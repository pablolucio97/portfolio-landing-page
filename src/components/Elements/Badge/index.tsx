import React, { CSSProperties } from 'react';
import { Container, Title } from './styles';

interface BadgeProps {
    title: string;
    textVariant?: 'light' | 'dark',
    badgePrimaryColor?: string
    badgeSecondaryColor?: string
    textStyle?: CSSProperties;
    textClassName?: string;
    badgeStyle?: CSSProperties;
    badgeClassName?: string;
}

export function Badge({
    title,
    textVariant,
    badgePrimaryColor,
    badgeSecondaryColor,
    badgeClassName,
    badgeStyle,
    textClassName,
    textStyle
}: BadgeProps) {
    return (
        <Container
            style={badgeStyle}
            className={badgeClassName}
            badgePrimaryColor={badgePrimaryColor}
            badgeSecondaryColor={badgeSecondaryColor}
        >
            <Title
                textVariant={textVariant}
                style={textStyle}
                className={textClassName}
            >
                {title}
            </Title>
        </Container>
    )
}