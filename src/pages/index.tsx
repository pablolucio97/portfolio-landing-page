import { useState } from 'react';
import { SkillCardImage } from '../components/Cards/SkillCardImage';
import { TestimonialCard } from '../components/Cards/TestimonialCard';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { NextImage } from '../components/Next/NextImage';
import { GradientText } from '../components/Typography/GradientText';
import { SubTitle } from '../components/Typography/SubTitle';
import { Text } from '../components/Typography/Text';
import { Title } from '../components/Typography/Title';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    enterprises,
    skills,
    testimonials
} from '../data/data';
import {
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
import { theme } from '../themes/theme';
import { sendWhatsAppMessage } from '../ultis/sendWhatsAppMessage';

export default function Home() {

    const [skill, setSkill] = useState({
        title: '',
        content: ''
    })

    function handleSendEmail() {
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
                            height={400}
                            width={640}
                            imgUrl='/systems.png'
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
                                    content='Meu nome é Pablo Silva e sou desenvolvedor full-stack. Trabalho com o desenvolvimento de aplicações completas utilizando NodeJS no back-end, React/NextJS no front-end e React Native/Expo no mobile.'
                                />
                                <Text
                                    content='Durante a minha jornada, sempre procuro trabalhar observando boas práticas de desenvolvimento e adotar ações para providenciar agradável experiência ao usuário final.'
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
                        content='Empresas assistidas'
                    />
                    <Text
                        content='Empresas em que já trabalhei diretamente ou prestei serviços como freelancer'
                    />
                    {
                        enterprises.map(enterprise => (
                            <a key={enterprise.id} href={enterprise.website}>
                                <NextImage
                                    width={enterprise.width}
                                    height={enterprise.height}
                                    imgUrl={enterprise.img}
                                />
                            </a>
                        ))
                    }
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
                                'Passe o mouse sobre a tecnologia para entender como a utilizo em uma aplicação do mundo real.'}
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
                            content={`Veja o que pessoas que já trabalharam comigo \n dizem`}
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
                        content={`Vamos juntos dar vida às interfaces e alavancar projetos \nque podem transformar o mundo, literalmente.`}
                    />
                    <PrimaryButton
                        ariaLabel='button'
                        onClick={handleSendEmail}
                        title='Enviar um email'
                        size='large'
                        icon={<MdEmail size={20} />}
                    />
                    <PrimaryButton
                        ariaLabel='button'
                        onClick={sendWhatsAppMessage}
                        title='Chamar no Whatsapp'
                        size='large'
                        style={{ backgroundColor: theme.colors.success }}
                        icon={<FaWhatsapp size={20} />}
                    />
                </ContactSectionContainer>
            </ContactSection>

        </Container >
    )
}