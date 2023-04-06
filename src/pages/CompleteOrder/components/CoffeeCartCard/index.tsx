import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";
import capuccino from "/coffees/capuccino.png";
export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={capuccino} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
