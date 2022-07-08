import React, { CSSProperties, ReactNode } from 'react';
import {
    Container,
    ContentContainer,
    TitleContainer,
    Text,
    Title
} from './styles';

interface GroupInfoProps {
    title: string;
    content?: string;
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    titleStyle?: CSSProperties;
    titleClassName?: string;
    contentStyle?: CSSProperties;
    contentClassName?: string;
}

export function GroupInfo({
    children,
    title,
    content,
    style,
    titleStyle,
    contentStyle,
    className,
    titleClassName,
    contentClassName
}: GroupInfoProps) {
    return (
        <Container
            style={style}
            className={className}
        >
            <TitleContainer>
                {children}
                <Title
                    style={titleStyle}
                    className={titleClassName}
                >{title}
                </Title>
            </TitleContainer>
            {content &&
                <ContentContainer>
                    <Text
                        style={contentStyle}
                        className={contentClassName}
                    >
                        {content}
                    </Text>
                </ContentContainer>
            }
        </Container>
    )
}