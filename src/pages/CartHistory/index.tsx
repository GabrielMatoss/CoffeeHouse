import { MapPinLine, Minus, Plus, Trash, TrashSimple } from "phosphor-react";
import { ContainerCartHistory } from "./styles";

import caféComLeite from "../../assets/cafeComLeite.png";
import chocolateQuente from "../../assets/chocolateQuente.png";

export function CartHistory() {
  return (
    <ContainerCartHistory>
      <div className="contentInfos">
        <h3>Complete seu pedido</h3>
        <form action="" className="formContainer">
          <div className="headerForm">
            <MapPinLine size={25} />
            <div>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <input type="text" name="" id="CEP" />
          <input type="text" name="" id="Rua" />

          <div>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
          </div>

          <div>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
          </div>
        </form>

        <div className="methodPayment">
          <p>Metodos de pagamento</p>
        </div>
      </div>

      <div className="contentValues">
        <h3>Cafés relacionados</h3>
        <div className="container">
          <div className="contentCardCoffee">
            <img src={caféComLeite} />
            <div className="contentPropsCoffee">
              <div className="nameAndPrice">
                <h4>Café com Leite</h4>
                <p>R$ 5,00</p>
              </div>

              <div className="containerButtons">
                <div>
                  <button>+</button>
                  <span>1</span>
                  <button>-</button>
                </div>

                <button>
                  <span>Remover</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerCartHistory>
  );
}
