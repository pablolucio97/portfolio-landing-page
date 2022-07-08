import { ReactNode } from 'react';
import Fade from 'react-reveal/Fade'


interface FadeReveal {
    children: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

export function RevealFade({
    children,
    left,
    right,
    top,
    bottom,
}: FadeReveal) {
    return (
        <Fade
            left={left}
            right={right}
            top={top}
            bottom={bottom}
        >
            {children}
        </Fade>
    )
}