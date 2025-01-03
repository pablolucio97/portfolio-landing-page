import { ReactNode, useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import { useTheme } from "styled-components";
import { Drawer } from "../components/Elements/Drawer";
import { DrawerButton } from "../components/Elements/DrawerButton";
import { Footer } from "../components/Elements/Footer";
import { FooterFirstSection } from "../components/Elements/Footer/FooterFirstSection";
import { FooterLink } from "../components/Elements/Footer/FooterLink";
import { FooterSecondSection } from "../components/Elements/Footer/FooterSecondSection";
import { FooterTitle } from "../components/Elements/Footer/FooterTitle";
import { Header } from "../components/Elements/Header";
import { HeaderLink } from "../components/Elements/Header/HeaderLink";
import { HeaderLinksContainer } from "../components/Elements/Header/HeaderLinksContainer";
import { SocialIcons } from "../components/Elements/SocialIcons";
import { TopScrollButton } from "../components/Elements/TopScrollButton";
import { Text } from "../components/Typography/Text";
import { Container } from "./styles";

import { WhatsappButton } from "../components/Elements/WhatsappButton";
import { NextProgressComponent } from "../components/Next/NextProgress";
import { getYear } from "../ultis/date";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = useTheme();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(false);
  const [scrollTopAnimation, setScrollTopAnimation] = useState(false);

  function handleToggleDrawer() {
    setToggleDrawer(!toggleDrawer);
  }

  function scrollHeaderAnimation() {
    //@ts-ignore
    const topPos = window.scrollY;
    if (topPos > 20) {
      setHeaderAnimation(true);
    } else {
      setHeaderAnimation(false);
    }
  }

  function scrollTopScrollButtonAnimation() {
    //@ts-ignore
    const topPos = window.scrollY;
    if (topPos > 500) {
      setScrollTopAnimation(true);
    } else {
      setScrollTopAnimation(false);
    }
  }

  function callAnimations() {
    scrollTopScrollButtonAnimation();
    scrollHeaderAnimation();
  }

  useEffect(() => {
    window.addEventListener("scroll", callAnimations);
    return () => window.removeEventListener("scroll", callAnimations);
    //eslint-disable-next-line
  }, []);

  return (
    <Container id="top">
      <NextProgressComponent color={theme.colors.white100} />
      <TopScrollButton
        ariaLabel="Voltar para o topo"
        className={scrollTopAnimation ? "animatedTopScroll" : "normalTopScroll"}
        icon={<MdArrowUpward />}
        elementReferenceId="top"
      />
      <WhatsappButton
        ariaLabel="Voltar para o topo"
        className={scrollTopAnimation ? "animatedTopScroll" : "normalTopScroll"}
        whatsappContact={process.env.NEXT_PUBLIC_PHONE}
      />
      <Header
        className={headerAnimation ? "headerScrolling" : "headerNotScrolling"}
      >
        {toggleDrawer && (
          <Drawer toggleDrawer={handleToggleDrawer} direction="top">
            <HeaderLink
              content="Quem sou eu"
              url="#whoami"
              onClick={handleToggleDrawer}
            />
            <HeaderLink
              content="Portfólio"
              url="#portfolio"
              onClick={handleToggleDrawer}
            />
            <HeaderLink
              content="Empresas assistidas"
              url="#enterprises"
              onClick={handleToggleDrawer}
            />
            <HeaderLink
              content="Tecnologias"
              url="#skills"
              onClick={handleToggleDrawer}
            />
            <HeaderLink
              content="Contato"
              url="#contact"
              onClick={handleToggleDrawer}
            />
          </Drawer>
        )}
        <DrawerButton toggleDrawer={handleToggleDrawer} />
        <HeaderLinksContainer>
          <HeaderLink content="Quem sou eu" url="#whoami" />
          <HeaderLink content="Portfólio" url="#portfolio" />
          <HeaderLink content="Empresas assistidas" url="#enterprises" />
          <HeaderLink content="Tecnologias" url="#skills" />
          <HeaderLink content="Contato" url="#contact" />
        </HeaderLinksContainer>
      </Header>
      <main>{children}</main>
      <Footer
        style={{
          backgroundColor: theme.colors.black100,
        }}
      >
        <FooterFirstSection>
          <FooterTitle content="Acesso rápido" />
          <FooterLink content="Quem sou eu" url="#whoami" />
          <FooterLink content="Portfólio" url="#portfolio" />
          <FooterLink content="Empresas assistidas" url="#enterprises" />
          <FooterLink content="Tecnologias" url="#skills" />
          <FooterLink content="Contato" url="#contact" />
        </FooterFirstSection>
        <FooterSecondSection>
          <FooterTitle content="Redes sociais" />
          <SocialIcons
            linkedinUrl="https://www.linkedin.com/in/pablo-silva-dev"
            githubUrl="https://github.com/pablolucio97"
            instagramUrl="https://www.instagram.com/pablosilva.dev"
            iconsSize="small"
            iconsStyle={{ color: theme.colors.white500 }}
          />
          <Text
            content={`PabloSilvaDev - © Copyright  ${getYear()}`}
            style={{
              color: theme.colors.white100,
              fontSize: theme.sizes.small,
            }}
          />
        </FooterSecondSection>
      </Footer>
    </Container>
  );
}
