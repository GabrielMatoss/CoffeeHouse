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

          <input type="text" name="" id="CEP" placeholder="CEP" />
          <input type="text" name="" id="Rua" placeholder="Rua" />

          <div className="containerNumberAndComplement">
            <input type="text" name="" id="Num" placeholder="Número" />
            <input type="text" name="" id="Comp" placeholder="Complemento" />
          </div>

          <div className="containerBairroCidadeUf">
            <input type="text" name="" id="Bairro" placeholder="Bairro" />
            <input type="text" name="" id="Cidade" placeholder="Cidade" />
            <input type="text" name="" id="Uf" placeholder="UF" />
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
                <p>R$ 6,00</p>
              </div>

              <div className="containerButtons">
                <div className="qtdButtons">
                  <button>
                    <Minus size={18} weight="fill" />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus size={18} weight="fill" />
                  </button>
                </div>

                <button className="removeBtn">
                  <Trash size={18} />
                  <span>Remover</span>
                </button>
              </div>
            </div>
          </div>
          <div className="contentCardCoffee">
            <img src={caféComLeite} />
            <div className="contentPropsCoffee">
              <div className="nameAndPrice">
                <h4>Café com Leite</h4>
                <p>R$ 6,00</p>
              </div>

              <div className="containerButtons">
                <div className="qtdButtons">
                  <button>
                    <Minus size={18} weight="fill" />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus size={18} weight="fill" />
                  </button>
                </div>

                <button className="removeBtn">
                  <Trash size={18} />
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
