import { HeaderNav, Localization, SectionCartLocal } from "./HeaderStyles";
import coffeDeliveryLogo  from "../assets/coffeedelivery-logo.svg"; 

import { MapPin } from "phosphor-react";
import {ShoppingCart} from "phosphor-react";

export function Header(){
    return (
        <HeaderNav>
            <img src={coffeDeliveryLogo}/>

            <SectionCartLocal>
                <Localization>
                    <MapPin weight="fill" size={22} className="iconMap"/>
                    <div>Porto Alegre, RS</div>
                </Localization>

                <div className="contentCart">
                    <ShoppingCart weight="fill" size={22}/>
                </div>
            </SectionCartLocal>
        </HeaderNav>
    )
}