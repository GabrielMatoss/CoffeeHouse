import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustrarion from "../../assets/confirmedOrder.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType{
  state: OrderData;
}

export function OrderConfirmed() {
  const { colors } = useTheme();
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!state){
      navigate("/")
    }
  },[]);

  if(!state) return <></>;

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
                Entrega em <strong>{state.street}, {state.number}</strong>
                <br /> {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustrarion} />
      </section>
    </OrderConfirmedContainer>
  );
}
