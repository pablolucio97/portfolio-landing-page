import { CSSProperties, forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormErrorMessage, InputProps  } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { ChakraPasswordInput } from './styles';

interface PasswordInputValidatorProps extends InputProps{
    error?: FieldError;
    passwordPlaceholder?: string;
    style?: CSSProperties;
    className?: string;
}

const PasswordInputValidator: ForwardRefRenderFunction<HTMLInputElement, PasswordInputValidatorProps> = ({ error, passwordPlaceholder, style, className, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            <ChakraPasswordInput
                ref={ref}
                type='password'
                {...rest}
                error={error}
                placeholder={passwordPlaceholder}
                style={style}
                className={className}
            />
            {!!error && (<FormErrorMessage>{error.message}</FormErrorMessage>)}
        </FormControl>
    )
}

export const PasswordValidator = forwardRef(PasswordInputValidator)

