import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ModalBoxProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children?: ReactNode;
    modalClassName?: string;
    overlayClassName?: string;
    showAnimation?: boolean
}

export function ModalBox({
    isOpen,
    onRequestClose,
    children,
    modalClassName,
    overlayClassName,
    showAnimation = true
}: ModalBoxProps) {

    return (
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={modalClassName}
            overlayClassName={overlayClassName}
            showAnimation={showAnimation}
        >
           {children}
        </Container>
    )
}