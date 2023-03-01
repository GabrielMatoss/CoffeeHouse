import imageCoffee from "../../assets/coffeeDelivery.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeSloganContent } from "./styles";

export function CoffeeSlogan() {
  return (
    <CoffeeSloganContent>
      <div className="slogan">
        <div className="title">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="contentItems">
          <div>
            <span className="contentIcons">
              <ShoppingCart weight="fill" size={16} />
            </span>
            <p>Compra simples e segura</p>
          </div>

          <div>
            <span className="contentIcons">
              <Package weight="fill" size={16} />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span className="contentIcons">
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <span className="contentIcons">
              <Coffee size={18} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </div>

        <img src={imageCoffee} alt="" />
    </CoffeeSloganContent>
  );
}
