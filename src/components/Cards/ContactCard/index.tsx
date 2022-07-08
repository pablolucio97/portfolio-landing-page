import { CSSProperties, ReactNode } from 'react';
import {
    CardContainer,
    Container,
    Text,
    TextContainer,
    Title
} from './styles';

interface ContactCardProps {
    email: string;
    cardTitle?: string;
    phone?: string;
    address?: string;
    contactMessage?: string;
    cardStyle?: CSSProperties;
    textStyle?: CSSProperties;
    ActionCardStyle?: CSSProperties;
    cardClassName?: string;
    textClassName?: string;
    ActionCardClassName?: string;
    emailIcon?: ReactNode;
    phoneIcon?: ReactNode;
    addressIcon?: ReactNode;
    children?: ReactNode;
    glassEffect?: boolean;
}

export function ContactCard({
    email,
    cardTitle,
    phone,
    address,
    emailIcon,
    phoneIcon,
    addressIcon,
    children,
    contactMessage,
    cardStyle,
    cardClassName,
    ActionCardStyle,
    ActionCardClassName,
    textStyle,
    textClassName,
    glassEffect
}: ContactCardProps) {

    return (
        <Container>
            <CardContainer
                style={cardStyle}
                className={glassEffect ? 'glassEffect' : cardClassName}
            >
                <Title
                    style={ActionCardStyle}
                    className={ActionCardClassName}
                >
                    {cardTitle}
                </Title>
                {email &&
                    <TextContainer>
                        {emailIcon}
                        <Text
                            style={textStyle}
                            className={textClassName}
                        >
                            {email}
                        </Text>
                    </TextContainer>
                }
                {phone &&
                    <TextContainer>
                        {phoneIcon}
                        <Text
                            style={textStyle}
                            className={textClassName}
                        >
                            {phone}
                        </Text>
                    </TextContainer>
                }
                {address &&
                    <TextContainer>
                        {addressIcon}
                        <Text
                            style={textStyle}
                            className={textClassName}
                        >
                            {address}
                        </Text>
                    </TextContainer>
                }
                <Text
                    style={textStyle}
                    className={textClassName}
                >
                    {contactMessage}
                </Text>
                {children}
            </CardContainer>
        </Container>
    )
}