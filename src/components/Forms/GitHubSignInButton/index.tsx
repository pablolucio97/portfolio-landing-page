import { CSSProperties } from 'react';
import { FaGithub } from 'react-icons/fa';
import ReactLoading, { LoadingProps } from 'react-loading';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface GitHubSignInButtonProps {
    title: string;
    onClick: () => Promise<void>;
    disabled?: boolean;
    loading?: boolean;
    themeColor?: 'dark' | 'light';
    animationType?: LoadingProps['type'];
    className?: string;
    style?: CSSProperties;
}

export function GitHubSignInButton({
    title,
    onClick,
    disabled,
    themeColor,
    animationType,
    loading,
    className,
    style
}: GitHubSignInButtonProps) {

    const theme = useTheme()

    return (
        <Container
            disabled={disabled}
            themeColor={themeColor}
            className={className}
            style={style}
            onClick={onClick}
            data-testid='GitHubSignInButton-id'
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
                    <FaGithub
                        size={24}
                        color='#757575'
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