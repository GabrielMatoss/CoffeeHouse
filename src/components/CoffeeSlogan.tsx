
import imageCoffee from "../assets/coffee-delivery.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeSloganContent } from "./CoffeeSloganStyles";

export function CoffeeSlogan() {
    return (
        <CoffeeSloganContent>
            <div className="slogan">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <div className="contentBeneficios">
                        <span>
                               <div className="contentIcons">
                                     <ShoppingCart weight="fill" size={16}/>
                                </div>
                                <p>Compra simples e segura</p>
                        </span>
                             
             
                            <span>
                                <div className="contentIcons">
                                <Package weight="fill" size={16}/>
                                </div>
                                <p>Embalagem mantém o café intacto</p>
                            </span>
                            <span>
                                <div className="contentIcons">
                                <Timer size={16} weight="fill" />
                                </div>
                                <p>Entrega rápida e rastreada</p>
                            </span>
                            <span>
                                <div className="contentIcons">
                                <Coffee size={18} weight="fill" />
                                </div>
                                <p>O café chega fresquinho até você</p>
                            </span>
                </div>
            </div>

            <div className="imageCoffee">
                <img className="imageCoffee" src={imageCoffee} alt="" />
            </div>
        </CoffeeSloganContent>
    );
}