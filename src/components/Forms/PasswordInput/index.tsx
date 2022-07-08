import { CSSProperties, InputHTMLAttributes } from 'react';
import { Container, Input, IconContainer } from './styles';
import { FiEyeOff, FiEye } from 'react-icons/fi'

interface Props { }

export interface PasswordInputProps extends InputHTMLAttributes<Props> {
    showsIcon?: boolean;
    passwordIsVisible?: boolean;
    togglePassword?: () => void;
    iconStyle?: CSSProperties;
    iconClassName?: string;
    inputStyle?: CSSProperties;
    inputClassName?: string;
}

export const PasswordInput = ({
    showsIcon,
    iconStyle,
    iconClassName,
    inputStyle,
    inputClassName,
    passwordIsVisible = false,
    togglePassword,
    ...rest
}: PasswordInputProps) =>  {
    return (
        <Container
        >
            {showsIcon &&
                <IconContainer
                    onClick={togglePassword}
                >
                    {
                        passwordIsVisible
                            ?
                            <FiEye
                                style={iconStyle}
                                className={iconClassName}
                            />
                            :
                            <FiEyeOff
                                style={iconStyle}
                                className={iconClassName}
                            />
                    }
                </IconContainer>
            }
            <Input
                style={inputStyle}
                className={inputClassName}
                type={passwordIsVisible && showsIcon ? 'text' : 'password'}
                required
                data-testid='passwordinput-id'
                {...rest}
            />
        </Container>
    )
}