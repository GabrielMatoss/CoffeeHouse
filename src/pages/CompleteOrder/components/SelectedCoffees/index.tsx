import { CoffeeCartCard } from "../CoffeeCartCard";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees(){
    return(
        <SelectedCoffeesContainer>
            <h3>Cafés selecionados</h3>

            <DetailsContainer>
              <CoffeeCartCard />
              <CoffeeCartCard />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}