import { CoffeeCard } from "../CoffeeCard";
import { CoffeeGalleryContainer, CoffeeList } from "./styles";

export function CoffeeGallery(){
    return(
        <CoffeeGalleryContainer className="container">
            <h3>Nossos Cafés</h3>
            
            <CoffeeList>
                <CoffeeCard />
            </CoffeeList>
            
        </CoffeeGalleryContainer>
    );
}