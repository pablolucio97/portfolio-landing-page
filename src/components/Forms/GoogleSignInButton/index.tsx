import { CSSProperties } from 'react';
import { FcGoogle } from 'react-icons/fc';
import ReactLoading, { LoadingProps } from 'react-loading';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface GoogleSignInButtonProps {
    title: string;
    onClick: () => Promise<void>;
    disabled?: boolean;
    loading?: boolean;
    themeColor?: 'dark' | 'light';
    animationType?: LoadingProps['type'];
    className?: string;
    style?: CSSProperties;
}

export function GoogleSignInButton({
    title,
    onClick,
    disabled,
    themeColor,
    animationType,
    loading,
    className,
    style
}: GoogleSignInButtonProps) {

    const theme = useTheme()

    return (
        <Container
            disabled={disabled}
            themeColor={themeColor}
            className={className}
            style={style}
            onClick={onClick}
            data-testid='GoogleSignInbutton-id'
        >
            {loading ?
                <ReactLoading
                    type={animationType ? animationType : 'bubbles'}
                    color={themeColor === 'dark' ? theme.colors.white100 : theme.colors.primary}
                    height={36}
                    width={36}
                    data-testid='submit-button-children-test-id'
                />
                :
                <>
                    <FcGoogle
                        size={24}
                    />
                    <Title
                        themeColor={themeColor}
                    >
                        {title}
                    </Title>
                </>
            }
        </Container>
    )
}