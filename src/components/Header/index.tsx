import { CartButton, HeaderButtonsContainer, HeaderContainer, LocalizationButton } from "./styles";
import coffeeDeliveryLogo from "../../assets/coffeeDeliveryLogo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header(){
    return(
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                <img src={coffeeDeliveryLogo} />
                </NavLink>
                

                <HeaderButtonsContainer>
                    <LocalizationButton>
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </LocalizationButton>

                    <NavLink to={"/completeOrder"}>
                    <CartButton>
                        <ShoppingCart size={20} weight="fill"/>
                    </CartButton>
                    </NavLink>
                    
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}