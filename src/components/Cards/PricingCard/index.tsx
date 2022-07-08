import { CSSProperties, ReactNode } from 'react';
import {

    Container, DealsMonthPrice,
    Divider, InfoContainer,
    OldPrice,
    PriceContainer,
    PurchaseButton,
    RecommendationBadge,
    ResourceContainer,
    SubContainer,
    Text,
    TextItem,
    Title
} from './styles';

interface PricingCardProps {
    title: string;
    resources: string[];
    resourceIcon?: ReactNode;
    oldPrice?: string;
    dealsMonthPrice: string;
    purchaseButtonTitle: string;
    totalPrice: string;
    finishPurchase: () => Promise<void>;
    recommendationTitle?: string;
    cardStyle?: CSSProperties;
    cardClassName?: string;
    titleStyle?: CSSProperties;
    titleClassName?: string;
    resourcesStyle?: CSSProperties;
    resourcesClassName?: string;
    oldPriceStyle?: CSSProperties;
    oldPriceClassName?: string;
    dealsMonthPriceStyle?: CSSProperties;
    dealsMonthPriceClassName?: string;
    purchaseButtonStyle?: CSSProperties;
    purchaseButtonClassName?: string;
    totalPriceStyle?: CSSProperties;
    totalPriceClassName?: string;
    recommendationTitleStyle?: CSSProperties;
    recommendationTitleClassName?: string;
    chidlren?: ReactNode;
    glassEffect?: boolean;
}

export function PricingCard({
    title,
    resources,
    resourceIcon,
    oldPrice,
    dealsMonthPrice,
    totalPrice,
    recommendationTitle,
    purchaseButtonTitle,
    finishPurchase,
    cardClassName,
    cardStyle,
    dealsMonthPriceClassName,
    dealsMonthPriceStyle,
    oldPriceClassName,
    oldPriceStyle,
    purchaseButtonClassName,
    purchaseButtonStyle,
    recommendationTitleClassName,
    recommendationTitleStyle,
    resourcesClassName,
    resourcesStyle,
    titleClassName,
    titleStyle,
    totalPriceClassName,
    totalPriceStyle,
    chidlren,
    glassEffect
}: PricingCardProps) {
    return (
        <Container>
            <SubContainer
                className={glassEffect ? 'glassEffect' : cardClassName}
                style={cardStyle}
            >
                {recommendationTitle &&
                    <RecommendationBadge
                        className={recommendationTitleClassName}
                        style={recommendationTitleStyle}
                    >
                        {recommendationTitle}
                    </RecommendationBadge>
                }
                <Title
                    className={titleClassName}
                    style={titleStyle}
                >
                    {title}
                </Title>
                <InfoContainer>
                    {resources.map(resource => (
                        <ResourceContainer
                            key={resource}
                        >
                            {resourceIcon && resourceIcon}
                            <TextItem
                                className={resourcesClassName}
                                style={resourcesStyle}
                            >
                                {resource}
                            </TextItem>
                        </ResourceContainer>
                    ))}
                </InfoContainer>
                <Divider />
                <PriceContainer>
                    <OldPrice
                        className={oldPriceClassName}
                        style={oldPriceStyle}
                    >
                        {oldPrice}
                    </OldPrice>
                    <DealsMonthPrice
                        className={dealsMonthPriceClassName}
                        style={dealsMonthPriceStyle}
                    >
                        {dealsMonthPrice}
                    </DealsMonthPrice>
                    <Text
                        className={totalPriceClassName}
                        style={totalPriceStyle}
                    >
                        {totalPrice}
                    </Text>
                </PriceContainer>
                {chidlren}
                <PurchaseButton
                    onClick={finishPurchase}
                    className={purchaseButtonClassName}
                    style={purchaseButtonStyle}
                >
                    {purchaseButtonTitle}
                </PurchaseButton>
            </SubContainer>
        </Container>
    )
}