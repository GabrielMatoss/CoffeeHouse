import { HeroContainer, HeroContent } from "./styles";
import heroCoffeeDelivery from "../../../../assets/heroCoffeeDelivery.png";

export function Hero(){
   return(
    <HeroContainer>
       <HeroContent className="container">
            <div>
                <section>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </section>
            </div>

            <img src={heroCoffeeDelivery} />
       </HeroContent>
    </HeroContainer>
   )
}