import React, { CSSProperties } from 'react';
import { MdEmail } from 'react-icons/md'
import {
    Container,
    Form,
    Input,
    SubmitButton,
    Title,
    Text,
    TitleContainer,
    NewsletterContainer
} from './styles';


interface NewsletterCardProps {
    title: string
    subtitle?: string
    emailPlaceholder: string
    namePlaceholder?: string
    submit: () => Promise<void>
    cardStyle?: CSSProperties
    inputStyle?: CSSProperties
    buttonStyle?: CSSProperties
    newsletterTitleStyle?: CSSProperties
    newsletterSubTitleStyle?: CSSProperties
    cardClassName?: string;
    inputClassName?: string;
    buttonClassName?: string;
    newsletterTitleClassName?: string;
    newsletterSubTitleClassName?: string;
    glassEffect?: boolean;
}

export function NewsletterCard({
    title,
    subtitle,
    namePlaceholder,
    emailPlaceholder,
    submit,
    cardStyle,
    buttonStyle,
    inputStyle,
    newsletterTitleStyle,
    newsletterSubTitleStyle,
    cardClassName,
    buttonClassName,
    inputClassName,
    newsletterTitleClassName,
    newsletterSubTitleClassName,
    glassEffect
}: NewsletterCardProps) {
    return (
        <Container
        >
            <NewsletterContainer
                className={glassEffect ? 'glassEffect' : cardClassName}
                style={cardStyle}
            >
                <TitleContainer>
                    <Title
                        style={newsletterTitleStyle}
                        className={newsletterTitleClassName}
                    >
                        {title}
                    </Title>
                    <Text
                        style={newsletterSubTitleStyle}
                        className={newsletterSubTitleClassName}
                    >
                        {subtitle}
                    </Text>
                </TitleContainer>
                <Form
                    onSubmit={submit}
                >
                    {
                        namePlaceholder &&
                        <Input
                            type='text'
                            name='name'
                            placeholder={namePlaceholder}
                            required
                            style={inputStyle}
                            className={inputClassName}
                        />
                    }
                    <Input
                        type='email'
                        name='email'
                        placeholder={emailPlaceholder}
                        required
                        style={inputStyle}
                        className={inputClassName}
                    />
                    <SubmitButton
                        type='submit'
                        style={buttonStyle}
                        className={buttonClassName}
                    >
                        Submit
                    </SubmitButton>
                </Form>
            </NewsletterContainer>

        </Container>
    )
}