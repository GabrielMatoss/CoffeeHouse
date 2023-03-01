import { HeaderNav, Localization, SectionCartLocal } from "./styles";
import coffeDeliveryLogo from "../../assets/coffeeDeliveryLogo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
    return (
        <HeaderNav>
            <img src={coffeDeliveryLogo}/>
            <SectionCartLocal>
                <Localization>
                    <MapPin weight="fill" size={22} className="iconMap"/>
                    <p>Porto Alegre, RS</p>
                </Localization>

                <div className="contentCart">
                    <ShoppingCart weight="fill" size={22}/>
                </div>
            </SectionCartLocal>
        </HeaderNav>
    )
}