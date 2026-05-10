import { useI18n } from "../../../../i18n";
import { Container, Divider, FlagImage, LangButton, LangLabel } from "./styles";

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();

  return (
    <Container>
      <LangButton
        $active={locale === "pt-BR"}
        onClick={() => setLocale("pt-BR")}
        aria-label="Mudar para Português"
      >
        <FlagImage src="/flags/br.png" alt="Bandeira do Brasil" />
        <LangLabel $active={locale === "pt-BR"}>PT</LangLabel>
      </LangButton>
      <Divider>|</Divider>
      <LangButton
        $active={locale === "en-US"}
        onClick={() => setLocale("en-US")}
        aria-label="Switch to English"
      >
        <FlagImage src="/flags/us.png" alt="United States flag" />
        <LangLabel $active={locale === "en-US"}>EN</LangLabel>
      </LangButton>
    </Container>
  );
}
