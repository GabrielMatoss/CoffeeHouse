import { MapPinLine, Minus, Plus, Trash, TrashSimple } from "phosphor-react";
import { ContainerCartHistory } from "./styles";

import caféComLeite from "../../assets/cafeComLeite.png";
import chocolateQuente from "../../assets/chocolateQuente.png";


export function CartHistory() {
  return (
    <ContainerCartHistory>
      <div className="contentInfos">
        <h3>Complete seu pedido</h3>
        <form action="">
          <div className="headerForm">
            <MapPinLine size={24} />
            <div>
              <p>Endereço de entrega</p>
              <p>Informe onde deseja receber seu pedido</p>
            </div>
          </div>

          <input type="text" name="" id="" />
          <input type="text" name="" id="" />

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
                <div>
                  <div>
                    <h6>Café com Leite</h6>
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
