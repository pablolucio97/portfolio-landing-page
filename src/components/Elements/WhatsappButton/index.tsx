import { CSSProperties } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { sendWhatsAppMessage } from "../../../ultis/sendWhatsAppMessage";
import { Button } from "./styles";

interface WhatsappButtonProps {
  whatsappContact: string | undefined;
  ariaLabel: string;
  style?: CSSProperties;
  className?: string;
  backgroundVariant?: "dark" | "light";
}

export function WhatsappButton({
  className,
  ariaLabel,
  style,
}: WhatsappButtonProps) {
  return (
    <Button
      onClick={sendWhatsAppMessage}
      style={{
        backgroundColor: "#02994d",
      }}
      className={className}
      aria-label={ariaLabel}
    >
      <BsWhatsapp />
    </Button>
  );
}
