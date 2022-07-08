import React from 'react';
import { Container } from './styles';
import Modal from 'react-modal';

interface VideoModalProps {
    videoUrl: string
    isOpen: boolean;
    onRequestClose: () => void;
    className?: string;
    overlayClassName?: string;
}

export function VideoModal({
    videoUrl,
    isOpen,
    onRequestClose,
    className,
    overlayClassName,
}: VideoModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={className}
            overlayClassName={overlayClassName}
        >
            <Container
                src={videoUrl}
            />
        </Modal>
    )
}