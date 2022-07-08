import { CSSProperties, forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormErrorMessage, FormLabel, InputProps } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { ChakraEmailInput } from './styles';

interface EmailInputValidatorProps extends InputProps {
    error?: FieldError;
    emailPlaceholder?: string;
    style?: CSSProperties;
    className?: string;
}

const EmailInputValidator: ForwardRefRenderFunction<HTMLInputElement, EmailInputValidatorProps> = ({ error, emailPlaceholder, style,  className, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            <ChakraEmailInput
                ref={ref}
                type='email'
                {...rest}
                style={style}
                className={className}
                placeholder={emailPlaceholder}
            />
               {!!error && (
                <FormErrorMessage
                    style={{
                        marginTop: 4,
                        marginLeft: 8
                    }}
                >
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const EmailValidator = forwardRef(EmailInputValidator)