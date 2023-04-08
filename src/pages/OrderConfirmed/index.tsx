import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustrarion from "../../assets/confirmedOrder.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmed() {
  const { colors } = useTheme();
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors.purple}
            text={
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br /> Farrapos - Porto Alegre, RS
              </p>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors.yellow}
            text={
              <p>
                Previsão de Entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["yellow-dark"]}
            text={
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustrarion} />
      </section>
    </OrderConfirmedContainer>
  );
}
