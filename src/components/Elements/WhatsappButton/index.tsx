import React, { CSSProperties, ReactNode } from 'react';
import { Button } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { sendWhatsAppMessage } from '../../../ultis/sendWhatsAppMessage';

interface WhatsappButtonProps {
    ariaLabel: string;
    style?: CSSProperties;
    className?: string;
    backgroundVariant?: 'dark' | 'light';
}

export function WhatsappButton({
    className,
    ariaLabel,
    style,
    backgroundVariant = 'light'
}: WhatsappButtonProps) {


    return (
        <Button
            onClick={sendWhatsAppMessage}
            style={{
                backgroundColor: backgroundVariant === 'dark' ?
                    '#075e54' :
                    '#25d366'
            } || style}
            className={className}
            aria-label={ariaLabel}
        >
            <BsWhatsapp />
        </Button>
    )
}