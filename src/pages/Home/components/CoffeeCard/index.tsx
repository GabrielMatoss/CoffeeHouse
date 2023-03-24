import {
  AddCartWrapper,
    CardFooter,
  CoffeeCardContainer,
  DescriptionCoffee,
  NameCoffee,
  Tags,
} from "./styles";
import { listCoffee } from "../../../../utils/CoffeeData";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
export function CoffeeCard() {
  return (
    <>
      {listCoffee.map((e) => {
        return (
          <CoffeeCardContainer key={e.id}>
            <img src={e.src} alt="" />

            <Tags>
           {
            listCoffee.map((teste) => {
             return <span key={`${teste.name}${teste.tags}`}>{teste.tags}</span>
            })
           }
            </Tags>

            <NameCoffee>{e.name}</NameCoffee>
            <DescriptionCoffee>{e.description}</DescriptionCoffee>

            <CardFooter>
              <div>
                <span>R$</span>
                <p>9,90</p>
              </div>
              <AddCartWrapper>
                <QuantityInput />
                <button>
                  <ShoppingCart size={22} weight="fill"/>
                </button>
              </AddCartWrapper>
            </CardFooter>
          </CoffeeCardContainer>
        );
      })}
    </>
  );
}
