import { CSSProperties } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface SubmitButtonProps {
    title: string;
    disabled?: boolean;
    loading?: boolean;
    size?: "tiny" | "small" | "medium" | "large";
    onClick: () => Promise<void>;
    style?: CSSProperties;
    className?: string;
    
}

export function SubmitButton({
    title,
    disabled,
    loading,
    size,
    onClick,
    style,
    className
}: SubmitButtonProps) {

    const theme = useTheme()

    return (
        <Container
            type='submit'
            disabled={disabled}
            data-testid='submit-button-test-id'
            onClick={onClick}
            size={size}
            style={style}
            className={className}
        >
            {loading ?
                <ReactLoading
                    type='bubbles'
                    color={theme.colors.white100}
                    height={40}
                    width={40}
                    data-testid='submit-button-children-test-id'
                />
                :
                title
            }
        </Container>
    )
}