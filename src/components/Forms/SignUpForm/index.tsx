import { CSSProperties } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

import { FacebookSignInButton } from '../FacebookSignInButton';
import { GitHubSignInButton } from '../GitHubSignInButton';
import { GoogleSignInButton } from '../GoogleSignInButton';
import { SubmitButton } from '../SubmitButton';
import {
    ButtonsContainer,
    Container,
    Divider, ForgotPasswordButton, SubTitle, Text, Title
} from './styles';
import { EmailValidator } from '../EmailInput/emailValidator';
import { PasswordValidator } from '../PasswordInput/passwordValidator';
import { ConfirmPasswordValidator } from '../PasswordInput/confirmPasswordValidator';
import { TextInputValidator } from '../TextInput/textInputValidator';

interface SignUpFormProps {
    formTitle: string;
    formSubtitle?: string;
    formAdditionalText?: string;
    submitButtonTitle: string;
    githubSignInButtonTitle?: string;
    facebookSignInButtonTitle?: string;
    forgotPasswordButtonTitle?: string;
    emailPlaceholder?: string;
    namePlaceholder?: string;
    passwordPlaceholder?: string;
    confirmPasswordPlaceholder?: string;
    submit?: () => Promise<void>;
    passwordForget?: () => Promise<void>;
    SignInWithGitHub?: () => Promise<void>;
    SignInWithGoogle?: () => Promise<void>;
    SignInWithFacebook?: () => Promise<void>;
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
    nameInputStyle?: CSSProperties;
    passwordInputStyle?: CSSProperties;
    emailInputClassName?: string;
    nameInputClassName?: string;
    passwordInputClassName?: string;
    emailErrorMessage?: FieldError;
    nameErrorMessage?: FieldError;
    passwordErrorMessage?: FieldError;
    confirmPasswordErrorMessage?: FieldError;
    emailRegister?: UseFormRegisterReturn;
    nameRegister?: UseFormRegisterReturn;
    passwordRegister?: UseFormRegisterReturn;
    confirmPasswordRegister?: UseFormRegisterReturn;
}

export function SignUpForm({
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
    SignInWithFacebook,
    SignInWithGoogle,
    SignInWithGitHub,
    namePlaceholder,
    emailPlaceholder,
    passwordPlaceholder,
    confirmPasswordPlaceholder,
    confirmPasswordErrorMessage,
    confirmPasswordRegister,
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
    passwordInputClassName,
    nameErrorMessage,
    nameRegister,
    nameInputClassName,
    nameInputStyle
}: SignUpFormProps) {


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
                        onClick={SignInWithGoogle!}
                        className={googleSignInButtonClassName}
                        style={googleSignInButtonStyle}
                    />
                }
                {
                    githubSignInButtonTitle &&
                    <GitHubSignInButton
                        disabled={buttonsDisabled}
                        title={githubSignInButtonTitle}
                        onClick={SignInWithGitHub!}
                        className={githubSignInButtonClassName}
                        style={githubSignInButtonStyle}
                    />
                }
                {
                    facebookSignInButtonTitle &&
                    <FacebookSignInButton
                        disabled={buttonsDisabled}
                        title={facebookSignInButtonTitle}
                        onClick={SignInWithFacebook!}
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
            <TextInputValidator
                error={nameErrorMessage}
                textInputPlaceholder={namePlaceholder}
                style={nameInputStyle}
                className={nameInputClassName}
                {...nameRegister}
            />
            <EmailValidator
                error={emailErrorMessage}
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
            <ConfirmPasswordValidator
                error={confirmPasswordErrorMessage}
                confirmPasswordPlaceholder={confirmPasswordPlaceholder}
                style={passwordInputStyle}
                className={passwordInputClassName}
                {...confirmPasswordRegister}
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