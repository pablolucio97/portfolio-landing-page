import { CSSProperties } from 'react';
import { FieldError, UseFormRegisterReturn,FieldValues } from 'react-hook-form'

import { EmailValidator } from '../EmailInput/validator';
import { FacebookSignInButton } from '../FacebookSignInButton';
import { GitHubSignInButton } from '../GitHubSignInButton';
import { GoogleSignInButton } from '../GoogleSignInButton';
import { SubmitButton } from '../SubmitButton';
import {
    ButtonsContainer,
    Container,
    Divider, ForgotPasswordButton, SubTitle, Text, Title
} from './styles';
import { PasswordValidator } from '../PasswordInput/validator';

interface SignInFormProps {
    formTitle: string;
    formSubtitle?: string;
    formAdditionalText?: string;
    submitButtonTitle: string;
    githubSignInButtonTitle?: string;
    facebookSignInButtonTitle?: string;
    forgotPasswordButtonTitle?: string;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    submit?: () => Promise<void>;
    passwordForget?: () => Promise<void>;
    signInWithGitHub?: () => Promise<void>;
    signInWithGoogle?: () => Promise<void>;
    signInWithFacebook?: () => Promise<void>;
    buttonsDisabled?: boolean;
    buttonsLoading?: boolean;
    formContainerStyle?: CSSProperties;
    formContainerClassName?: string;
    formTitleStyle?: CSSProperties;
    formTitleClassName?: string;
    submitButtonStyle?: CSSProperties;
    submitButtonClassName?: string;
    forgotPasswordButtonStyle?: CSSProperties;
    forgotPasswordButtonClassName?: string;
    formSubtitleStyle?: CSSProperties;
    formSubtitleClassName?: string;
    formAdditionalTextStyle?: CSSProperties;
    formAdditionalTextClassName?: string;
    googleSignInButtonTitle?: string;
    googleSignInButtonClassName?: string;
    githubSignInButtonClassName?: string;
    facebookSignInButtonClassName?: string;
    googleSignInButtonStyle?: CSSProperties;
    githubSignInButtonStyle?: CSSProperties;
    facebookSignInButtonStyle?: CSSProperties;
    emailInputStyle?: CSSProperties;
    passwordInputStyle?: CSSProperties;
    emailInputClassName?: string;
    passwordInputClassName?: string;
    emailErrorMessage?: FieldError;
    passwordErrorMessage?: FieldError;
    emailRegister?: UseFormRegisterReturn;
    passwordRegister?: UseFormRegisterReturn;
}




export function SignInForm({
    formTitle,
    submitButtonTitle,
    forgotPasswordButtonTitle,
    formSubtitle,
    formAdditionalText,
    formTitleStyle,
    formTitleClassName,
    submitButtonStyle,
    submitButtonClassName,
    forgotPasswordButtonStyle,
    forgotPasswordButtonClassName,
    formSubtitleStyle,
    formSubtitleClassName,
    formAdditionalTextStyle,
    formAdditionalTextClassName,
    submit,
    googleSignInButtonTitle,
    githubSignInButtonTitle,
    facebookSignInButtonTitle,
    googleSignInButtonStyle,
    githubSignInButtonStyle,
    facebookSignInButtonStyle,
    googleSignInButtonClassName,
    githubSignInButtonClassName,
    facebookSignInButtonClassName,
    passwordForget,
    signInWithFacebook,
    signInWithGoogle,
    signInWithGitHub,
    emailPlaceholder,
    passwordPlaceholder,
    buttonsDisabled,
    buttonsLoading,
    formContainerClassName,
    formContainerStyle,
    emailErrorMessage,
    passwordErrorMessage,
    emailRegister,
    passwordRegister,
    emailInputStyle,
    emailInputClassName,
    passwordInputStyle,
    passwordInputClassName
}: SignInFormProps) {




    return (
        <Container
            className={formContainerClassName}
            style={formContainerStyle}
        >
            <Title
                style={formTitleStyle}
                className={formTitleClassName}
            >
                {formTitle}
            </Title>
            <ButtonsContainer>
                {
                    googleSignInButtonTitle &&
                    <GoogleSignInButton
                        disabled={buttonsDisabled}
                        title={googleSignInButtonTitle}
                        onClick={signInWithGoogle!}
                        className={googleSignInButtonClassName}
                        style={googleSignInButtonStyle}
                    />
                }
                {
                    githubSignInButtonTitle &&
                    <GitHubSignInButton
                        disabled={buttonsDisabled}
                        title={githubSignInButtonTitle}
                        onClick={signInWithGitHub!}
                        className={githubSignInButtonClassName}
                        style={githubSignInButtonStyle}
                    />
                }
                {
                    facebookSignInButtonTitle &&
                    <FacebookSignInButton
                        disabled={buttonsDisabled}
                        title={facebookSignInButtonTitle}
                        onClick={signInWithFacebook!}
                        className={facebookSignInButtonClassName}
                        style={facebookSignInButtonStyle}
                    />
                }
            </ButtonsContainer>
            {
                formSubtitle &&
                <>
                    <Divider />
                    <SubTitle
                        className={formSubtitleClassName}
                        style={formSubtitleStyle}
                    >
                        {formSubtitle}
                    </SubTitle>
                </>
            }
            <EmailValidator
                error={emailErrorMessage!}
                emailPlaceholder={emailPlaceholder}
                style={emailInputStyle}
                className={emailInputClassName}
                {...emailRegister}
            />
            <PasswordValidator
                error={passwordErrorMessage}
                passwordPlaceholder={passwordPlaceholder}
                style={passwordInputStyle}
                className={passwordInputClassName}
                {...passwordRegister}
            />
            <SubmitButton
                title={submitButtonTitle}
                disabled={buttonsDisabled}
                onClick={submit!}
                loading={buttonsLoading}
                className={submitButtonClassName}
                style={submitButtonStyle}
            />
            {
                forgotPasswordButtonTitle &&
                <ForgotPasswordButton
                    onClick={passwordForget}
                    disabled={buttonsDisabled}
                    style={forgotPasswordButtonStyle}
                    className={forgotPasswordButtonClassName}
                >
                    {
                        forgotPasswordButtonTitle
                    }
                </ForgotPasswordButton>
            }
            {formAdditionalText &&
                <Text
                    style={formAdditionalTextStyle}
                    className={formAdditionalTextClassName}
                >
                    {formAdditionalText}
                </Text>
            }
        </Container>
    )
}