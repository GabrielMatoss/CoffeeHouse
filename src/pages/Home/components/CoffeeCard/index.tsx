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

            <NameCoffee>{e.name}</NameCoffee>
            <DescriptionCoffee>{e.description}</DescriptionCoffee>

            <CardFooter></CardFooter>
          </CoffeeCardContainer>
        );
      })}
    </>
  );
}
