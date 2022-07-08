import { CSSProperties } from 'react';

import {
    ActionsContainer,
    Container,
    ContentContainer,
    PrimaryActionButton,
    SecondaryActionButton,
    SubContainer,
    Text,
    Title,
    TitleContainer

} from './styles';

interface ActionCardProps {
    title: string;
    content: string;
    primaryActionButtonTitle?: string;
    secondaryActionButtonTitle?: string;
    primaryAction?: () => void;
    secondaryAction?: () => void;
    cardStyle?: CSSProperties;
    textStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    primaryActionButtonStyle?: CSSProperties;
    secondaryActionButtonStyle?: CSSProperties;
    cardClassName?: string;
    textClassName?: string;
    titleClassName?: string;
    primaryActionButtonClassName?: string;
    secondaryActionButtonClassName?: string;
    glassEffect?: boolean;
}

export function ActionCard({
    title,
    content,
    primaryActionButtonTitle,
    secondaryActionButtonTitle,
    primaryAction,
    secondaryAction,
    cardStyle,
    cardClassName,
    primaryActionButtonClassName,
    primaryActionButtonStyle,
    secondaryActionButtonClassName,
    secondaryActionButtonStyle,
    textClassName,
    textStyle,
    titleClassName,
    titleStyle,
    glassEffect
}: ActionCardProps) {
    return (
        <Container>
            <SubContainer
                style={cardStyle}
                className={glassEffect ? 'glassEffect' : cardClassName}
            >
                <TitleContainer>
                    <Title
                        style={titleStyle}
                        className={titleClassName}
                    >
                        {
                            title.length > 32 ?
                                title.substring(0, 32).concat('...') :
                                title
                        }
                    </Title>
                </TitleContainer>
                <ContentContainer>
                    <Text
                        style={textStyle}
                        className={textClassName}
                    >
                        {content}
                    </Text>
                </ContentContainer>
                {primaryActionButtonTitle &&
                    <ActionsContainer>
                        <PrimaryActionButton
                            style={primaryActionButtonStyle}
                            className={primaryActionButtonClassName}
                            onClick={primaryAction}
                        >
                            {primaryActionButtonTitle}
                        </PrimaryActionButton>
                        <SecondaryActionButton
                            style={secondaryActionButtonStyle}
                            className={secondaryActionButtonClassName}
                            onClick={secondaryAction}
                        >
                            {secondaryActionButtonTitle}
                        </SecondaryActionButton>
                    </ActionsContainer>
                }
            </SubContainer>
        </Container>
    )
}