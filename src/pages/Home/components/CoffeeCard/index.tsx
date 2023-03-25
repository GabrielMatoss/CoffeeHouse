import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  DescriptionCoffee,
  NameCoffee,
  Tags,
} from "./styles";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { ListCoffeeProps } from "../../../../utils/CoffeeData";
import { formatMoney } from "../../../../utils/formatMoney";
interface CoffeeCardProps {
  coffee: ListCoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const formattedPrice = formatMoney(coffee.value);

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.src}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <NameCoffee>{coffee.name}</NameCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

      <CardFooter>
        <div>
          <span>R$</span>
          <p>{formattedPrice}</p>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
