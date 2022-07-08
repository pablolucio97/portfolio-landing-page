import { CSSProperties } from 'react';
import { useTheme } from 'styled-components';
import {
    FaInstagramSquare,
    FaTwitterSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
    FaYoutubeSquare
} from 'react-icons/fa'

import {
    Avatar,
    AvatarContainer,
    ColorContainer,
    Container,
    ContentContainer,
    Text,
    Title,
    Button,
    SocialContainer,
    SubContainer
} from './styles';

interface ProfileCardProps {
    imgUrl: string;
    title: string;
    bio?: string;
    instagramUrl?: string;
    twitterUrl?: string;
    facebookUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    youtubeUrl?: string;
    bgColor?: string;
    cardStyle?: CSSProperties;
    titleStyle?: CSSProperties;
    iconsStyle?: CSSProperties;
    bioStyle?: CSSProperties;
    cardClassName?: string;
    titleClassName?: string;
    iconsClassName?: string;
    bioClassName?: string;
    glassEffect?: boolean;
}

export function ProfileCard({
    imgUrl,
    title,
    bio,
    instagramUrl,
    twitterUrl,
    facebookUrl,
    githubUrl,
    linkedinUrl,
    youtubeUrl,
    bgColor,
    bioClassName,
    bioStyle,
    cardClassName,
    cardStyle,
    iconsClassName,
    iconsStyle,
    titleClassName,
    titleStyle,
    glassEffect
}: ProfileCardProps) {

    const theme = useTheme()

    function openExternUrl(url: string) {
        return window.open(url, "_blank");
    }

    return (
        <Container>
            <SubContainer
                style={cardStyle}
                className={glassEffect? 'glassEffect' : cardClassName}
            >
                <ColorContainer
                    bgColor={bgColor}
                >
                    <AvatarContainer>
                        <Avatar
                            src={imgUrl}
                            alt='psd'
                            width={120}
                            height={120}
                            data-testid='profile-card-id'
                        />
                    </AvatarContainer>
                </ColorContainer>
                <ContentContainer>
                    <Title
                        style={titleStyle}
                        className={titleClassName}
                    >
                        {title}
                    </Title>
                    {bio &&
                        <Text
                            style={bioStyle}
                            className={bioClassName}
                        >
                            {bio}
                        </Text>
                    }
                    <SocialContainer>
                        {instagramUrl &&
                            <Button
                                onClick={() => openExternUrl(instagramUrl)}
                            >
                                <FaInstagramSquare
                                    size={24}
                                    color={theme.colors.primary}
                                    style={iconsStyle}
                                    className={iconsClassName}
                                />
                            </Button>
                        }
                        {twitterUrl &&
                            <Button
                                onClick={() => openExternUrl(twitterUrl)}
                            >
                                <FaTwitterSquare
                                    size={24}
                                    color={theme.colors.primary}
                                    style={iconsStyle}
                                    className={iconsClassName}
                                />
                            </Button>
                        }
                        {facebookUrl &&
                            <Button
                                onClick={() => openExternUrl(facebookUrl)}
                            >
                                <FaFacebookSquare
                                    size={24}
                                    color={theme.colors.primary}
                                    style={iconsStyle}
                                    className={iconsClassName}
                                />
                            </Button>
                        }
                        {githubUrl &&
                            <Button
                                onClick={() => openExternUrl(githubUrl)}
                            >
                                <FaGithubSquare
                                    size={24}
                                    color={theme.colors.primary}
                                    style={iconsStyle}
                                    className={iconsClassName}
                                />
                            </Button>
                        }
                        {linkedinUrl &&
                            <Button
                                onClick={() => openExternUrl(linkedinUrl)}
                            >
                                <FaLinkedin
                                    size={24}
                                    color={theme.colors.primary}
                                    style={iconsStyle}
                                    className={iconsClassName}
                                />
                            </Button>
                        }
                        {youtubeUrl &&
                            <Button
                                onClick={() => openExternUrl(youtubeUrl)}
                            >
                                <FaYoutubeSquare
                                    size={24}
                                    color={theme.colors.primary}
                                    style={iconsStyle}
                                    className={iconsClassName}
                                />
                            </Button>
                        }
                    </SocialContainer>
                </ContentContainer>

            </SubContainer>
        </Container>
    )
}