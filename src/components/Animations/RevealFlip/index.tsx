import { ReactNode } from 'react';
import Flip from 'react-reveal/Flip'

interface FlipReveal {
    children: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;

}

export function RevealFlip({
    children,
    left,
    right,
    top,
    bottom
 }: FlipReveal) {
    return (
        <Flip
            left={left}
            right={right}
            top={top}
            bottom={bottom}
        >
            {children}
        </Flip>
    )
}