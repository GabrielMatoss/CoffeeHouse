import { CartButton, HeaderButtonsContainer, HeaderContainer, LocalizationButton } from "./styles";
import coffeeDeliveryLogo from "../../assets/coffeeDeliveryLogo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";


export function Header(){
    const {cartQuantity} = useCart();
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
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                        <ShoppingCart size={20} weight="fill"/>
                    </CartButton>
                    </NavLink>
                    
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}