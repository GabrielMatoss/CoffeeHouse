import { ShoppingCart } from "phosphor-react";
import { CoffeListStyles } from "./CoffeeListStyles";
import imgCoffeeExpresso from "../assets/Expresso.png";

export function CoffeeList () {
    return (
        <CoffeListStyles>
            <h2>Nossos cafés</h2>

            <div className="Card">
                <div className="SectionCoffeImg">
                    <img src={imgCoffeeExpresso} alt="" />
                     <span>tradicional</span>
                </div>
               

            <section className="SectionDescrition">
                <h3>Expresso Tradicional</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </section>
                

                <section className="SectionPrice">
                    <p>R$ 9,90</p>
                    <div className="ContainerButtons">
                    <div className="QtdButtons">
                        <button /*onClick={}*/> - </button>
                        <span>1</span>
                        <button /*onClick={}*/> + </button>
                    </div>
                        
                       

                        <div className="cart">
                        <ShoppingCart weight="fill" size={16} />
                        </div>
                    </div>
                </section>
            </div>
        </CoffeListStyles>
    );
}