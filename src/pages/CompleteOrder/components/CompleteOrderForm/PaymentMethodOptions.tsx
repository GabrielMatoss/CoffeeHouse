import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export function PaymentMethodOptions(){
    return(
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput text="Cartão de crédito" icon={<CreditCard  size={18}/>}/>
            <PaymentMethodInput text="Cartão de débito" icon={<Bank size={18} />}/>
            <PaymentMethodInput  text="Dinheiro" icon={<Money size={18} />}/>
        </PaymentMethodOptionsContainer>
    );
}