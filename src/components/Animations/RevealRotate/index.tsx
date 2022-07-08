import { ReactNode } from 'react';
import Rotate from 'react-reveal/Rotate'

interface RotateReveal {
    children: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;

}

export function RevealRotate({
    children,
    left,
    right,
    top,
    bottom
 }: RotateReveal) {
    return (
        <Rotate
            left={left}
            right={right}
            top={top}
            bottom={bottom}
        >
            {children}
        </Rotate>
    )
}