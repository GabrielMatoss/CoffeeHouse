import { ReactNode } from "react";
import { PaymentMethodInputContainer } from "./styles";

interface PaymentMethodInputProps {
  icon: ReactNode;
  text: string;
}

export function PaymentMethodInput({ icon, text }: PaymentMethodInputProps) {
  return (
    <PaymentMethodInputContainer>
      {icon}
      {text}
    </PaymentMethodInputContainer>
  );
}
