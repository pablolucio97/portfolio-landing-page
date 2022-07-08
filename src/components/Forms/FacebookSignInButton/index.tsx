import { CSSProperties } from 'react';
import { FaFacebook } from 'react-icons/fa';
import ReactLoading, { LoadingProps } from 'react-loading';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface FacebookSignInButtonProps {
    title: string;
    onClick: () => Promise<void>;
    disabled?: boolean;
    loading?: boolean;
    themeColor?: 'dark' | 'light';
    animationType?: LoadingProps['type'];
    className?: string;
    style?: CSSProperties;
}

export function FacebookSignInButton({
    title,
    onClick,
    disabled,
    themeColor,
    animationType,
    loading,
    className,
    style
}: FacebookSignInButtonProps) {

    const theme = useTheme()

    return (
        <Container
            disabled={disabled}
            themeColor={themeColor}
            className={className}
            style={style}
            onClick={onClick}
            data-testid='facebookSignInbutton-id'
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
                    <FaFacebook
                        size={24}
                        color='#346add'
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