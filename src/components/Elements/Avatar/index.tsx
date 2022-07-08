import Image from 'next/image'
import { CSSProperties } from 'react';
import { Container } from './styles';
import {name} from '../../../../package.json'

interface AvatarProps {
    imageUrl: string;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    style?: CSSProperties;
    className?: string;
}

export function Avatar({ imageUrl, size, style, className }: AvatarProps) {
    return (
        <Container
            style={style}
            className={className}
            size={size}
        >
            <Image
                src={imageUrl}
                data-testid='avatar-id'
                width={size === "tiny"
                    ? 40
                    : size === "small"
                        ? 64
                        : size === "large"
                            ? 112
                            : 88}
                height={size === "tiny"
                    ? 40
                    : size === "small"
                        ? 64
                        : size === "large"
                            ? 112
                            : 88}
                alt={name}
                style={{
                    borderRadius: '50%'
                }}
                quality={100}
            />
        </Container>
    )
}