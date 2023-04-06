import { Button } from "../../../../components/Button";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <span>R$ 9,90</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>

      <div>
        <h4>Total</h4>
        <span className="totalValue">R$ 33,20</span>
      </div>

      <Button text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  );
}
