import { CSSProperties } from 'react';
import Image from 'next/image'

import { Container, ImageContainer, Text, Title } from './styles';
import { name, dependencies } from '../../../../package.json'

interface ImageCardProps {
    imgUrl: string;
    imgTitle?: string;
    imgDescription?: string;
    imgSize?: "small" | "medium" | "large"
    cardStyle?: CSSProperties;
    cardClassName?: string;
    imgTitleStyle?: CSSProperties;
    imgTitleClassName?: string;
    imgDescriptionStyle?: CSSProperties;
    imgDescriptionClassName?: string;
    glassEffect?: boolean;
}

export function ImageCard({
    imgUrl,
    imgTitle,
    imgDescription,
    imgSize = 'medium',
    cardStyle,
    cardClassName,
    imgDescriptionClassName,
    imgDescriptionStyle,
    imgTitleStyle,
    imgTitleClassName,
    glassEffect
}: ImageCardProps) {
    return (
        <Container>
            <ImageContainer
                style={cardStyle}
                className={glassEffect ? 'glassEffect' : cardClassName}
            >
                {dependencies.next ?
                    <Image
                        src={imgUrl}
                        alt={name}
                        width={
                            imgSize === 'large' ?
                                640 :
                                imgSize === 'small'
                                    ?
                                    320 :
                                    480
                        }
                        height={
                            imgSize === 'large' ?
                                640 :
                                imgSize === 'small'
                                    ?
                                    320 :
                                    480
                        }
                        objectFit='cover'
                        data-testid='imagecard-id'
                    />
                    :
                    //eslint-disable-next-line
                    <img
                        src={imgUrl}
                        alt={name}
                        width={
                            imgSize === 'large' ?
                                640 :
                                imgSize === 'small'
                                    ?
                                    320 :
                                    480
                        }
                        height={
                            imgSize === 'large' ?
                                640 :
                                imgSize === 'small'
                                    ?
                                    320 :
                                    480
                        }
                        data-testid='imagecard-id'
                    />
                }


                {imgTitle &&
                    <Title
                        style={imgTitleStyle}
                        className={imgTitleClassName}
                    >
                        {
                            imgTitle?.length > 48 ?
                                imgTitle.substring(0, 48).concat('...') :
                                imgTitle
                        }
                    </Title>
                }
                {
                    imgDescription &&
                    <Text
                        style={imgDescriptionStyle}
                        className={imgDescriptionClassName}
                    >
                        {
                            imgDescription?.length > 256 ?
                                imgDescription.substring(0, 256).concat('...') :
                                imgDescription
                        }
                    </Text>
                }
            </ImageContainer>
        </Container>
    )
}