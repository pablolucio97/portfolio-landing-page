import React, { CSSProperties } from 'react';
import { Title } from './styles';

interface NavTitleProps {
    content: string;
    style?: CSSProperties;
    className?: string;
}

export function NavTitle({ content, className, style }: NavTitleProps) {
    return (
        <Title
            className={className}
            style={style}
        >
            {content}
        </Title>
    )
}