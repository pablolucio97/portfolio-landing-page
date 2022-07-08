import { CSSProperties, forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormErrorMessage, FormLabel, InputProps } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { ChakraConfirmPasswordInput } from './styles';

interface ConfirmPasswordInputValidatorProps extends InputProps {
    error?: FieldError;
    confirmPasswordPlaceholder?: string;
    style?: CSSProperties;
    className?: string;
}

const ConfirmPasswordInputValidator: ForwardRefRenderFunction<HTMLInputElement, ConfirmPasswordInputValidatorProps> = ({ error, confirmPasswordPlaceholder, style, className, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            <ChakraConfirmPasswordInput
                ref={ref}
                type='password'
                {...rest}
                error={error}
                placeholder={confirmPasswordPlaceholder}
                style={style}
                className={className}
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

export const ConfirmPasswordValidator = forwardRef(ConfirmPasswordInputValidator)

