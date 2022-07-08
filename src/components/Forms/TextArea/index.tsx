import { CSSProperties, TextareaHTMLAttributes } from 'react';
import { Container, Counter, TextAreaElement } from './styles';

interface Props { }

interface TextAreaProps extends TextareaHTMLAttributes<Props> {
    showsCharactersCounting?: boolean;
    currentLength?: number;
    maxCharacters?: number;
    labelValidationClassName?: string;
    labelValidationStyle?: CSSProperties;
}

export function TextArea({
    showsCharactersCounting = true,
    currentLength,
    maxCharacters = 120,
    labelValidationClassName,
    labelValidationStyle,
    ...rest
}: TextAreaProps) {
    return (
        <Container>
            <TextAreaElement
                maxLength={maxCharacters}
                {...rest}
            />
            <Counter
                style={labelValidationStyle}
                className={labelValidationClassName}
            >
                {currentLength} / {maxCharacters}
            </Counter>
        </Container>
    )
}