import { useState } from 'react';
import { RevealFade } from '../components/Animations/RevealFade';
import { PortfolioCard } from '../components/Cards/PortfolioCard';
import { SkillCardImage } from '../components/Cards/SkillCardImage';
import { TestimonialCard } from '../components/Cards/TestimonialCard';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { NextImage } from '../components/Next/NextImage';
import { GradientText } from '../components/Typography/GradientText';
import { SubTitle } from '../components/Typography/SubTitle';
import { Text } from '../components/Typography/Text';
import { Title } from '../components/Typography/Title';
import {
    applications,
    landingPages,
    skills,
    testimonials
} from '../data/data';
import {
    CardsContainer,
    ContactSection,
    ContactSectionContainer,
    Container,
    IntroductionSection,
    IntroductionSectionContainer,
    IntroductionSectionContentContainer,
    IntroductionSectionContentInfoContainer,
    IntroductionSectionImageContainer,
    PortfolioSection,
    PortfolioSectionContainer,
    ProfileColumnContainer,
    ProfileRowContainer,
    SkillsCardsContainer,
    SkillsInfoContainer,
    SkillsSection,
    SkillsSectionContainer,
    SubtitleContentContainer,
    TestimonialsCardsContainer,
    TestimonialsInfoContainer,
    TestimonialsSection,
    TestimonialsSectionContainer,
    WhoAmIColumnContainer,
    WhoAmISection,
    WhoAmISectionContainer,
    WhoAmISectionContentContainer,
    WhoAmISectionContentInfoContainer,
    WhoAmISectionImageContainer
} from '../styles/';

export default function Home() {

    const [skill, setSkill] = useState({
        title: '',
        content: ''
    })

    function handleGetInTouch() {
        const email = 'pablolucio_@hotmail.com'
        const body = 'Gostaria de iniciar um novo projeto.'
        return window.location.href = `mailto:?subject=${email}&body=${body}`
    }

    return (
        <Container>

            <IntroductionSection>
                <IntroductionSectionContainer>
                    <IntroductionSectionContentContainer>
                        <IntroductionSectionContentInfoContainer>
                            <ProfileRowContainer>
                                <NextImage
                                    height={160}
                                    width={160}
                                    imgUrl='/profile.png'
                                />
                                <ProfileColumnContainer>
                                    <Title
                                        content='Pablo Silva'
                                    />
                                    <SubtitleContentContainer>
                                        <SubTitle
                                            content='Dsenvolvedor'
                                        />
                                        <GradientText
                                            content='full-stack'
                                            direction='top-to-bottom'
                                            initialColor='#0094FF'
                                            finalColor='#90c3eb'

                                        />

                                    </SubtitleContentContainer>
                                </ProfileColumnContainer>
                            </ProfileRowContainer>
                        </IntroductionSectionContentInfoContainer>
                    </IntroductionSectionContentContainer>
                    <IntroductionSectionImageContainer>
                        <NextImage
                            height={368}
                            width={480}
                            imgUrl='/phone.svg'
                        />
                    </IntroductionSectionImageContainer>
                </IntroductionSectionContainer>
            </IntroductionSection>

            <WhoAmISection id='whoami'>
                <WhoAmISectionContainer>
                    <WhoAmISectionContentInfoContainer>
                        <WhoAmISectionContentContainer>
                            <WhoAmIColumnContainer>
                                <Title
                                    content='Quem sou eu'
                                />
                                <Text
                                    content='Meu nome é Pablo Silva e sou desenvolvedor front-end. Trabalho com o desenvolvimento de aplicações web e mobile. '
                                />
                                <Text
                                    content='Desde 2020, o meu foco tem sido construir aplicações web e mobile que fazem o uso de componentes inteligentes que reforçam um padrão de projeto sempre pensando em boas práticas, modularização e agradável experiência ao usuário.'
                                />
                                <NextImage
                                    height={131}
                                    width={697}
                                    imgUrl='/gb_contribuition.svg'
                                />
                            </WhoAmIColumnContainer>
                        </WhoAmISectionContentContainer>

                        <WhoAmISectionImageContainer>
                            <NextImage
                                height={368}
                                width={480}
                                imgUrl='/code.svg'
                            />
                        </WhoAmISectionImageContainer>
                    </WhoAmISectionContentInfoContainer>
                </WhoAmISectionContainer>
            </WhoAmISection>

            <PortfolioSection>
                <PortfolioSectionContainer id='portfolio'>
                    <Title
                        content='Experiências e Portfólio '
                    />
                    <SubTitle
                        content='Aplicações web'
                    />
                    <CardsContainer id='applications'>
                        {applications.map(application => (
                            <RevealFade key={application.name}>
                                <PortfolioCard
                                    imageUrl={application.image}
                                    imgWidth={560}
                                    imgHeight={420}
                                    title={application.name}
                                    pageUrl={application.url}
                                    content={application.description}
                                    techs={application.techs.map(tech =>
                                        tech.substring(0).concat('.png'))}
                                />
                            </RevealFade>
                        ))}
                    </CardsContainer>
                    <SubTitle
                        content='Landing Pages'

                    />
                    <CardsContainer id='landingpages'>
                        {landingPages.map(landing => (
                            <RevealFade key={landing.name}>
                                <PortfolioCard
                                    imageUrl={landing.image}
                                    imgWidth={560}
                                    imgHeight={420}
                                    title={landing.name}
                                    content={landing.description}
                                    pageUrl={landing.url}
                                    techs={landing.techs.map(tech =>
                                        tech.substring(0).concat('.png'))}
                                />
                            </RevealFade>
                        ))}
                    </CardsContainer>

                </PortfolioSectionContainer>
            </PortfolioSection>

            <SkillsSection id='skills'>
                <SkillsSectionContainer>
                    <SkillsInfoContainer>
                        <Title
                            content={skill.title ?
                                skill.title :
                                'Tecnologias'
                            }
                        />
                        <Text
                            content={skill.content ?
                                skill.content :
                                'Passe o mouse sobre a tecnologia entender como a utilizo em uma aplicação do mundo real.'}
                        />

                    </SkillsInfoContainer>
                    <SkillsCardsContainer>
                        {skills.map((skill, i) => (
                            <SkillCardImage
                                key={skill.image}
                                imgAlt={skill.alt}
                                imgUrl={skill.image}
                                className='skillCard'
                                onMouseEnter={() => setSkill({
                                    title: skill.title,
                                    content: skill.content
                                })}
                                onMouseLeave={() => setSkill({
                                    title: '',
                                    content: ''
                                })}
                            />
                        ))}
                    </SkillsCardsContainer>
                </SkillsSectionContainer>
            </SkillsSection>

            <TestimonialsSection>
                <TestimonialsSectionContainer>
                    <TestimonialsInfoContainer>
                        <Title
                            content='Depoimentos'
                        />
                        <SubTitle
                            content={`Veja o que pessoas que já trablharam comigo \n dizem a respeito.`}
                        />
                    </TestimonialsInfoContainer>
                    <TestimonialsCardsContainer>
                        {
                            testimonials.map(testimonial => (
                                <TestimonialCard
                                    key={testimonial.name}
                                    personName={testimonial.name}
                                    personPhotoUrl={testimonial.image}
                                    personRole={testimonial.role}
                                    testimonial={testimonial.testimonial}
                                />
                            ))
                        }

                    </TestimonialsCardsContainer>
                </TestimonialsSectionContainer>
            </TestimonialsSection>

            <ContactSection id='contact'>
                <ContactSectionContainer>
                    <Title
                        content='Contato'
                    />
                    <SubTitle
                        content='Vamos juntos dar vida às interfaces e alavancar projetos que podem transformar o mundo, literalmente.'
                    />
                    <PrimaryButton
                        ariaLabel='button'
                        onClick={handleGetInTouch}
                        title='Entrar em contato'
                        size='large'
                    />
                </ContactSectionContainer>
            </ContactSection>

        </Container>
    )
}