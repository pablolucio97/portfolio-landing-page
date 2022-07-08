import { ReactNode } from 'react';
import Zoom from 'react-reveal/Zoom'

interface ZoomReveal {
    children: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;

}

export function RevealZoom({
    children,
    left,
    right,
    top,
    bottom
 }: ZoomReveal) {
    return (
        <Zoom
            left={left}
            right={right}
            top={top}
            bottom={bottom}
        >
            {children}
        </Zoom>
    )
}