import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustrarion from "../../assets/confirmedOrder.svg";

export function OrderConfirmed(){
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>

            <section>
            <OrderDetailsContainer>
                <p>Olá</p>
            </OrderDetailsContainer>
                <img src={confirmedOrderIllustrarion}/>
            </section>
        </OrderConfirmedContainer>
    );
}