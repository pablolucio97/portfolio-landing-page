import { CSSProperties } from 'react';
import Image from 'next/image'
import StarRatings from 'react-star-ratings'

import {
    AvatarContainer,
    Container,
    DataContainer,
    StarsContainer,
    SubContainer,
    SubTitle,
    Text,
    Title
} from './styles';

interface TestimonialCardProps {
    personPhotoUrl: string;
    personName: string;
    personRole?: string;
    testimonial: string;
    ratings?: number;
    cardStyle?: CSSProperties;
    testimonialTextStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    roletestimonialTextStyle?: CSSProperties;
    cardClassName?: string;
    titleClassName?: string;
    testimonialClassName?: string;
    roletestimonialClassName?: string;
    glassEffect?: boolean;
}

export function TestimonialCard({
    personPhotoUrl,
    personName,
    personRole,
    testimonial,
    ratings,
    cardStyle,
    testimonialTextStyle,
    titleStyle,
    roletestimonialTextStyle,
    cardClassName,
    roletestimonialClassName,
    testimonialClassName,
    titleClassName,
    glassEffect
}: TestimonialCardProps) {

    return (
        <Container>
            <SubContainer
                style={cardStyle}
                className={glassEffect ? 'glassEffect' : cardClassName}
                data-testid='testimonialcard-id'
            >
                <AvatarContainer>
                    <Image
                        src={personPhotoUrl}
                        alt='photo'
                        width={80}
                        height={80}
                        style={{
                            borderRadius: '50%',
                        }}
                    />
                </AvatarContainer>
                <DataContainer>
                    <Text
                        style={testimonialTextStyle}
                        className={testimonialClassName}
                    >
                        {
                            testimonial
                        }
                    </Text>

                    {ratings &&
                        <StarsContainer>
                            <StarRatings
                                rating={ratings!}
                                starRatedColor="#ffc400"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="2px"
                                name='rating'
                            />
                        </StarsContainer>
                    }

                    <Title
                        style={titleStyle}
                        className={titleClassName}
                    >
                        {
                            personName?.length > 24 ?
                                personName.substring(0, 24).concat('...') :
                                personName
                        }
                    </Title>
                    {
                        personRole &&
                        <SubTitle
                            style={roletestimonialTextStyle}
                            className={roletestimonialClassName}
                        >
                            {
                                personRole?.length > 32 ?
                                    personRole.substring(0, 32).concat('...') :
                                    personRole
                            }
                        </SubTitle>
                    }
                </DataContainer>
            </SubContainer>
        </Container>
    )
}