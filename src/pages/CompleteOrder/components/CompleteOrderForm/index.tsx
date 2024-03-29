import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

export function CompleteOrderForm(){
    const { colors } = useTheme();

    return(
        <CompleteOrderFormContainer>
            <h3>Complete seu pedido</h3>

            <FormSectionContainer>
                <SectionTitle 
                title="Endereço de Entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
                icon={<MapPinLine color={colors["yellow-dark"]} size={22}/>}
                />

                <AddressForm />
            </FormSectionContainer>
            <FormSectionContainer>
                <SectionTitle 
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                icon={<CurrencyDollar color={colors.purple} size={22}/>}
                />

            <PaymentMethodOptions />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    );
}