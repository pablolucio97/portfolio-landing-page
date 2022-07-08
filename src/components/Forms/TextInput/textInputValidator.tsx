import { CSSProperties, forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormErrorMessage, FormLabel, InputProps  } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { ChakraTextInput } from './styles';

interface TextInputInputValidatorProps extends InputProps{
    error?: FieldError;
    TextInputPlaceholder?: string;
    textInputPlaceholder?: string;
    style?: CSSProperties;
    className?: string;
}

const InputValidator: ForwardRefRenderFunction<HTMLInputElement, TextInputInputValidatorProps> = ({ error, TextInputPlaceholder, textInputPlaceholder, style, className, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            <ChakraTextInput
                ref={ref}
                type='text'
                {...rest}
                error={error}
                placeholder={textInputPlaceholder }
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

export const TextInputValidator = forwardRef(InputValidator)
