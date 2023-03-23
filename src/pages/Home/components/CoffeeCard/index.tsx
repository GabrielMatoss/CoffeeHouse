import {
    CardFooter,
  CoffeeCardContainer,
  DescriptionCoffee,
  NameCoffee,
  Tags,
} from "./styles";
import { listCoffee } from "../../../../utils/CoffeeData";
export function CoffeeCard() {
  return (
    <>
      {listCoffee.map((e) => {
        return (
          <CoffeeCardContainer key={e.id}>
            <img src={e.src} alt="" />

            <Tags>
              <span>Tradicional</span>
              <span>Com leite</span>
            </Tags>

            <NameCoffee>Expresso Tradicional</NameCoffee>
            <DescriptionCoffee>O tradicional café feito com grãos moídos</DescriptionCoffee>

            <CardFooter>
              <div>
                <span>R$</span>
                <p>9,90</p>
              </div>
            </CardFooter>
          </CoffeeCardContainer>
        );
      })}
    </>
  );
}
