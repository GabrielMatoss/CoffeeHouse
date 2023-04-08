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
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";
export interface CoffeeCardProps {
  coffee: ListCoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const formattedPrice = formatMoney(coffee.value);
  const {addCoffeeToCart} = useCart();

  function handleIncrease(){
    setQuantity(state => state + 1)
  }

  function handleDecrease(){
    setQuantity(state => state - 1)
  }
 
  function handleAddToCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

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
          <QuantityInput 
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
