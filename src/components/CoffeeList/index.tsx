import { CoffeeCard } from "../CoffeeCard";
import { CoffeListStyles } from "./styles";


export function CoffeeList() {
  return (
    <CoffeListStyles>
      <div>
        <h2>Nossos cafés</h2>
      </div>
      <div className="CardContent">
        <CoffeeCard />
      </div>
    </CoffeListStyles>
  );
}
