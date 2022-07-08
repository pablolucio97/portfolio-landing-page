import Image from 'next/image';
import {
  MdFavoriteBorder,
  MdOutlineFavorite, MdShare,
  MdShoppingCart
} from 'react-icons/md';
import StarRatings from 'react-star-ratings';
import { useTheme } from 'styled-components';

import { CSSProperties, ReactNode } from 'react';
import {
  Container, FavoriteButton, PriceOnCreditText, PriceText, PurchaseButton, RatingsContainer, ShareButton,
  SubContainer, Title
} from './styles';

interface ProductCardProps {
  title: string;
  price: string;
  priceOnCredit?: string;
  imgUrl: string;
  ratings?: '1' | '2' | '3' | '4' | '5';
  addToCart: () => Promise<void>;
  addToCartButtonTitle: string;
  addToFavorites?: () => Promise<void>;
  removeFromFavorites?: () => Promise<void>;
  share?: () => Promise<void>;
  isFavorited?: boolean;
  children?: ReactNode
  cardStyle?: CSSProperties;
  cardClassName?: string;
  titleStyle?: CSSProperties;
  titleClassName?: string;
  parcelledPriceStyle?: CSSProperties;
  parcelledPriceClassName?: string;
  purchaseButtonStyle?: CSSProperties;
  purchaseButtonClassName?: string;
  totalPriceStyle?: CSSProperties;
  totalPriceClassName?: string;
  glassEffect?: boolean;
}

export function ProductCard({
  title,
  price,
  priceOnCredit,
  addToCartButtonTitle,
  ratings,
  imgUrl,
  addToCart,
  addToFavorites,
  isFavorited,
  removeFromFavorites,
  share,
  children,
  cardClassName,
  cardStyle,
  parcelledPriceClassName,
  parcelledPriceStyle,
  purchaseButtonClassName,
  purchaseButtonStyle,
  titleClassName,
  titleStyle,
  totalPriceClassName,
  totalPriceStyle,
  glassEffect
}: ProductCardProps) {

  const theme = useTheme()

  return (
    <Container>
      <SubContainer
        style={cardStyle}
        className={glassEffect ? 'glassEffect' : cardClassName}
      >
        {isFavorited ?
          <FavoriteButton
            onClick={removeFromFavorites}
          >
            <MdOutlineFavorite
              color={theme.colors.primary}
              size={24}
            />
          </FavoriteButton>
          :
          <FavoriteButton
            onClick={addToFavorites}
          >
            <MdFavoriteBorder
              color={theme.colors.element_base}
              size={24}
            />
          </FavoriteButton>
        }
        <ShareButton
          onClick={share}
        >
          <MdShare
            color={theme.colors.silver100}
            size={24}
          />
        </ShareButton>
        <Title
          style={titleStyle}
          className={titleClassName}
        >
          {title.length > 72 ? title.substring(0, 72).concat('...') : title}
        </Title>
        <Image
          src={imgUrl}
          width={200}
          height={200}
          alt='product'
        />
        <RatingsContainer>
          <StarRatings
            rating={parseInt(ratings!)}
            starRatedColor="#ffc400"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
        </RatingsContainer>
        <PriceText
          style={totalPriceStyle}
          className={totalPriceClassName}
        >
          {price}
        </PriceText>
        {priceOnCredit &&
          <PriceOnCreditText
            style={parcelledPriceStyle}
            className={parcelledPriceClassName}
          >
            {priceOnCredit}
          </PriceOnCreditText>}
        {children}
        <PurchaseButton
          onClick={addToCart}
          style={purchaseButtonStyle}
          className={purchaseButtonClassName}
        >
          <MdShoppingCart
            color={theme.colors.element_base}
            size={24}
          />
          {addToCartButtonTitle}
        </PurchaseButton>
      </SubContainer>
    </Container>
  )
}