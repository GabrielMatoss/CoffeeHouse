import { HeaderNav, Localization, SectionCartLocal } from "./styles";
import coffeDeliveryLogo from "../../assets/coffeeDeliveryLogo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header(){
    return (
        
        <HeaderNav>
            <NavLink to={"/"} title="Página Inicial">
            <img src={coffeDeliveryLogo}/>
            </NavLink>
           
            <SectionCartLocal>
                <Localization>
                    <MapPin weight="fill" size={22} className="iconMap"/>
                    <p>Porto Alegre, RS</p>
                </Localization>

               
                <NavLink to={"/cart"} title="Histórico do carrinho de compras" >
                    <div className="contentCart">
                    <ShoppingCart weight="fill" size={22}/>
                    </div> 
                </NavLink>
            </SectionCartLocal>
        </HeaderNav>
    )
}