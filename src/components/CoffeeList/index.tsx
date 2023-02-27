import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeListStyles } from "./styles";
import imgCoffeeExpresso from "../assets/Expresso.png";

export function CoffeeList() {
  return (
    <CoffeListStyles>
      <div>
        <h2>Nossos cafés</h2>
      </div>

      <div className="CardContent">
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
            <p>9,90</p>
            <div className="ContainerButtons">
              <div className="QtdButtons">
                <button /*onClick={}*/>
                  <Minus size={16} weight="fill" />
                </button>
                <p>1</p>
                <button /*onClick={}*/>
                  <Plus size={20} weight="fill" />
                </button>
              </div>

              <div className="cart">
                <ShoppingCart weight="fill" size={20} />
              </div>
            </div>
          </section>
        </div>


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
            <p>9,90</p>
            <div className="ContainerButtons">
              <div className="QtdButtons">
                <button /*onClick={}*/>
                  <Minus size={16} weight="fill" />
                </button>
                <p>1</p>
                <button /*onClick={}*/>
                  <Plus size={20} weight="fill" />
                </button>
              </div>

              <div className="cart">
                <ShoppingCart weight="fill" size={20} />
              </div>
            </div>
          </section>
        </div>

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
            <p>9,90</p>
            <div className="ContainerButtons">
              <div className="QtdButtons">
                <button /*onClick={}*/>
                  <Minus size={16} weight="fill" />
                </button>
                <p>1</p>
                <button /*onClick={}*/>
                  <Plus size={20} weight="fill" />
                </button>
              </div>

              <div className="cart">
                <ShoppingCart weight="fill" size={20} />
              </div>
            </div>
          </section>
        </div>

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
            <p>9,90</p>
            <div className="ContainerButtons">
              <div className="QtdButtons">
                <button /*onClick={}*/>
                  <Minus size={16} weight="fill" />
                </button>
                <p>1</p>
                <button /*onClick={}*/>
                  <Plus size={20} weight="fill" />
                </button>
              </div>

              <div className="cart">
                <ShoppingCart weight="fill" size={20} />
              </div>
            </div>
          </section>
        </div>

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
            <p>9,90</p>
            <div className="ContainerButtons">
              <div className="QtdButtons">
                <button /*onClick={}*/>
                  <Minus size={16} weight="fill" />
                </button>
                <p>1</p>
                <button /*onClick={}*/>
                  <Plus size={20} weight="fill" />
                </button>
              </div>

              <div className="cart">
                <ShoppingCart weight="fill" size={20} />
              </div>
            </div>
          </section>
        </div>

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
            <p>9,90</p>
            <div className="ContainerButtons">
              <div className="QtdButtons">
                <button /*onClick={}*/>
                  <Minus size={16} weight="fill" />
                </button>
                <p>1</p>
                <button /*onClick={}*/>
                  <Plus size={20} weight="fill" />
                </button>
              </div>

              <div className="cart">
                <ShoppingCart weight="fill" size={20} />
              </div>
            </div>
          </section>
        </div>
      </div>
      
    </CoffeListStyles>
  );
}
