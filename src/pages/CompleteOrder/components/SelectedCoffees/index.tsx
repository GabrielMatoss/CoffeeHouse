import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
