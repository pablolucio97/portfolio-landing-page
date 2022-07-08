import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

import { Container, IconContainer, Input } from './styles';

interface Props { }

export interface EmailInputProps extends InputHTMLAttributes<Props> {
    showsIcon?: boolean;
    inputStyle?: CSSProperties;
    inputClassName?: string;
    iconStyle?: CSSProperties;
    iconClassName?: string;
    icon?: ReactNode;
}

export const EmailInput = ({
    showsIcon,
    inputClassName,
    inputStyle,
    icon,
    ...rest
}: EmailInputProps) => {
    return (
        <Container>
            {showsIcon &&
                <IconContainer

                >
                    {icon && icon}
                </IconContainer>
            }
            <Input
                style={inputStyle}
                className={inputClassName}
                type='email'
                required
                {...rest}
            />
        </Container>
    )
}