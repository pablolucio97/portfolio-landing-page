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
import { LanguageSelector } from "../components/Elements/Header/LanguageSelector";
import { SocialIcons } from "../components/Elements/SocialIcons";
import { TopScrollButton } from "../components/Elements/TopScrollButton";
import { Text } from "../components/Typography/Text";
import { Container } from "./styles";

import { WhatsappButton } from "../components/Elements/WhatsappButton";
import { NextProgressComponent } from "../components/Next/NextProgress";
import { useI18n } from "../i18n";
import { getYear } from "../ultis/date";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  const { t } = useI18n();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(false);
  const [scrollTopAnimation, setScrollTopAnimation] = useState(false);

  function handleToggleDrawer() {
    setToggleDrawer(!toggleDrawer);
  }

  function scrollHeaderAnimation() {
    const topPos = window.scrollY;
    if (topPos > 20) {
      setHeaderAnimation(true);
    } else {
      setHeaderAnimation(false);
    }
  }

  function scrollTopScrollButtonAnimation() {
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
        ariaLabel={t.nav.whoami}
        className={scrollTopAnimation ? "animatedTopScroll" : "normalTopScroll"}
        icon={<MdArrowUpward />}
        elementReferenceId="top"
      />
      <WhatsappButton
        ariaLabel="WhatsApp"
        className={scrollTopAnimation ? "animatedTopScroll" : "normalTopScroll"}
        whatsappContact={process.env.NEXT_PUBLIC_PHONE}
      />
      <Header
        className={headerAnimation ? "headerScrolling" : "headerNotScrolling"}
      >
        {toggleDrawer && (
          <Drawer toggleDrawer={handleToggleDrawer} direction="top">
            <HeaderLink
              content={t.nav.whoami}
              url="#whoami"
              onClick={handleToggleDrawer}
            />
            <HeaderLink
              content={t.nav.portfolio}
              url="#portfolio"
              onClick={handleToggleDrawer}
            />
            <HeaderLink
              content={t.nav.enterprises}
              url="#enterprises"
              onClick={handleToggleDrawer}
            />
            <HeaderLink
              content={t.nav.skills}
              url="#skills"
              onClick={handleToggleDrawer}
            />
            <HeaderLink
              content={t.nav.contact}
              url="#contact"
              onClick={handleToggleDrawer}
            />
          </Drawer>
        )}
        <DrawerButton toggleDrawer={handleToggleDrawer} />
        <HeaderLinksContainer>
          <HeaderLink content={t.nav.whoami} url="#whoami" />
          <HeaderLink content={t.nav.portfolio} url="#portfolio" />
          <HeaderLink content={t.nav.enterprises} url="#enterprises" />
          <HeaderLink content={t.nav.skills} url="#skills" />
          <HeaderLink content={t.nav.contact} url="#contact" />
        </HeaderLinksContainer>
        <LanguageSelector />
      </Header>
      <main>{children}</main>
      <Footer
        style={{
          backgroundColor: theme.colors.black100,
        }}
      >
        <FooterFirstSection>
          <FooterTitle content={t.footer.quickAccess} />
          <FooterLink content={t.nav.whoami} url="#whoami" />
          <FooterLink content={t.nav.portfolio} url="#portfolio" />
          <FooterLink content={t.nav.enterprises} url="#enterprises" />
          <FooterLink content={t.nav.skills} url="#skills" />
          <FooterLink content={t.nav.contact} url="#contact" />
        </FooterFirstSection>
        <FooterSecondSection>
          <FooterTitle content={t.footer.socialNetworks} />
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
              textAlign: "center",
            }}
          />
        </FooterSecondSection>
      </Footer>
    </Container>
  );
}
