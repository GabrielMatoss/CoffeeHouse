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
        <div className="valuesTotal">
          <div className="queryCoffees">
                <img src={caféComLeite} alt="" />
                <div className="teste">
                 
                  <div>
                  <p>Expresso Tradicional</p>
                  <div className="containerButtons">
                    <div className="buttonsQtd">
                    <button /*onClick={}*/>
                      <Minus size={16} weight="fill" />
                      </button>
                      <p>1</p>
                     <button /*onClick={}*/>
                      <Plus size={20} weight="fill" />
                    </button>
                    </div>
                     
                    <button>
                      <Trash size={20} />
                      Remover
                     </button>
                  </div>
                   
                  </div>
                  <p>R$ 9,90</p>
                </div>
          </div>
        </div>
      </div>
    </ContainerCartHistory>
  );
}
