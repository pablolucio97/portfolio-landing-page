import { MdOutlineScreenSearchDesktop, MdSystemUpdate, MdWeb } from "react-icons/md";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

interface ServiceCardProps {
  title: string;
  icon: "mobile" | "web" | "system";
}

export function ServiceCard({ title, icon }: ServiceCardProps) {
  const theme = useTheme();

  const renderIcon = {
    mobile: <MdSystemUpdate size={32} color={theme.colors.primary} />,
    web: <MdWeb size={32} color={theme.colors.primary} />,
    system: <MdOutlineScreenSearchDesktop size={32} color={theme.colors.primary} />,
  };

  return (
    <Container>
      {renderIcon[icon]}
      <Title>{title}</Title>
    </Container>
  );
}
