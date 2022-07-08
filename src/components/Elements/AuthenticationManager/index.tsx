import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';
import { name } from '../../../../package.json';
import {
    Container,
    SignInButton,
    SignOutButton,
    Text
} from './styles';


interface AuthenticationManagerProps {
    signOutButtonTitle: string;
    signInButtonTitle: string;
    signInButtonClassName?: string;
    signIn?: (provider?: string) => void;
    signOut?: () => void;
    showsUserPhoto?: boolean;
    authenticationFeedbackText?: string;
    photoSize?: "small" | "medium" | "large";
    icon?: ReactNode;
    containerClassName?: string;
    containerStyle?: CSSProperties;
    authenticationFeedbackTextClassStyle?: CSSProperties;
    authenticationFeedbackTextClassName?: string;
    signOutButtonClassName?: string;
    signOutButtonStyle?: CSSProperties;
    signInButtonStyle?: CSSProperties;
}

export function AuthenticationManager({
    signOutButtonTitle,
    signInButtonTitle,
    containerClassName,
    containerStyle,
    authenticationFeedbackTextClassStyle,
    authenticationFeedbackTextClassName,
    signInButtonStyle,
    signOutButtonClassName,
    signOutButtonStyle,
    signInButtonClassName,
    signIn,
    signOut,
    showsUserPhoto,
    authenticationFeedbackText,
    photoSize,
    icon
}: AuthenticationManagerProps) {

    const { data: session } = useSession()

    if (session) {
        return (
            <Container
                style={containerStyle}
                className={containerClassName}
            >
                {showsUserPhoto &&
                    <Image
                        src={session.user.image}
                        width={
                            photoSize === 'small' ?
                                40 :
                                photoSize === 'large' ?
                                    80
                                    :
                                    64
                        }
                        height={
                            photoSize === 'small' ?
                                40
                                : photoSize === 'large' ?
                                    80
                                    :
                                    64
                        }
                        alt={name}
                        style={{
                            borderRadius: 48
                        }}
                    />
                }
                {
                    authenticationFeedbackText &&
                    <Text
                        className={authenticationFeedbackTextClassName}
                        style={authenticationFeedbackTextClassStyle}
                    >
                        {authenticationFeedbackText}
                    </Text>
                }
                <SignOutButton
                    onClick={() => signOut()}
                    style={signOutButtonStyle}
                    className={signOutButtonClassName}
                >
                    {signOutButtonTitle}
                </SignOutButton>
            </Container>
        )

    } else {
        return (
            <Container
                style={containerStyle}
                className={containerClassName}
            >
                {icon}
                {
                    authenticationFeedbackText &&
                    <Text
                        className={authenticationFeedbackTextClassName}
                        style={authenticationFeedbackTextClassStyle}
                    >
                        {authenticationFeedbackText}
                    </Text>
                }
                <SignInButton
                    onClick={() => signIn()}
                    style={signInButtonStyle}
                    className={signInButtonClassName}
                >
                    {signInButtonTitle}
                </SignInButton>
            </Container>
        )
    }


}