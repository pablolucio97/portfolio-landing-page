import { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';


interface NavProps {
    children?: ReactNode;
    style?: CSSProperties;
    className?: string
}

export function Nav({ children, style, className}: NavProps) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container>
    )
}