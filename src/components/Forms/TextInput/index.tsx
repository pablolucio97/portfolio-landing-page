import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { Container, IconContainer, Input } from './styles';

interface Props { }

export interface TextInputProps extends InputHTMLAttributes<Props> {
    showsIcon?: boolean;
    inputStyle?: CSSProperties;
    inputClassName?: string;
    icon?: ReactNode;
}

export function TextInput({
    showsIcon,
    inputClassName,
    inputStyle,
    icon,
    ...rest
}: TextInputProps) {
    return (
        <Container>
            {showsIcon &&
                <IconContainer>
                    {icon}
                </IconContainer>
            }
            <Input
                style={inputStyle}
                className={inputClassName}
                type='Text'
                required
                {...rest}
            />
        </Container>
    )
}