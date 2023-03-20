import { CartButton, HeaderButtonsContainer, HeaderContainer, LocalizationButton } from "./styles";
import coffeeDeliveryLogo from "../../assets/coffeeDeliveryLogo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";


export function Header(){
    return(
        <HeaderContainer>
            <div className="container">
                <img src={coffeeDeliveryLogo} />

                <HeaderButtonsContainer>
                    <LocalizationButton>
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </LocalizationButton>

                    <CartButton>
                        <ShoppingCart size={20} weight="fill"/>
                    </CartButton>
                    
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}