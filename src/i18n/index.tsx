import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { enUS } from "./translations/en-US";
import { ptBR } from "./translations/pt-BR";

export type Locale = "pt-BR" | "en-US";

export type SkillTranslation = { title: string; content: string };
export type ProjectTranslation = { title: string; description: string };
export type TestimonialTranslation = { testimonial: string; role: string };

export type Translations = {
  meta: { title: string };
  nav: {
    whoami: string;
    portfolio: string;
    enterprises: string;
    skills: string;
    contact: string;
  };
  intro: { developer: string; role: string };
  whoami: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  };
  portfolio: { title: string; subtitle: string };
  skills: {
    title: string;
    defaultContent: string;
    [key: string]: string | SkillTranslation;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialTranslation[];
  };
  enterprises: { title: string; text: string; logoAlt: string; ariaLabel: string };
  contact: { title: string; text: string; ai: string; button: string };
  footer: { quickAccess: string; socialNetworks: string };
  projects: Record<string, ProjectTranslation>;
};

const translations: Record<Locale, Translations> = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  locale: "pt-BR",
  setLocale: () => {},
  t: ptBR,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "pt-BR" || saved === "en-US") {
      setLocaleState(saved);
    } else if (!navigator.language.startsWith("pt")) {
      setLocaleState("en-US");
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
