import { CoffeeCardContainer } from "./styles";
import { listImgCoffee } from "../../../../utils/imagesCoffeeLib";
export function CoffeeCard(){
    return(
        <CoffeeCardContainer>
            <img src={listImgCoffee[0]} alt="" />
        </CoffeeCardContainer>
    );
}