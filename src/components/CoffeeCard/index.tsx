import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeCards } from "./styles";
import imgCoffeeExpresso from "../../assets/Expresso.png";
import { useState } from "react";

interface listCoffeeProps {
  id: number;
  name: string;
  tags: string | string[];
  description: string;
  value: string;
}
export const listCoffee: listCoffeeProps[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    tags: "Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    value: "9,90",
  },
  {
    id: 2,
    name: "Expresso Americano",
    tags: "Tradicional",
    description: "Expresso diluído, menos intenso que o tradicional",
    value: "9,90",
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    tags: "Tradicional",
    description: "Café expresso tradicional com espuma cremosa",
    value: "9,90",
  },
  {
    id: 4,
    name: "Expresso Gelado",
    tags: ["Tradicional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: "9,90",
  },
];

export function CoffeeCard() {
  const [cards, setCards] = useState<any>(listCoffee);

  return cards.map((values: listCoffeeProps) => {
    return (
      <CoffeeCards key={values.id}>
        <img src={imgCoffeeExpresso} alt="" />
        <div className="SectionCoffeeTag">
          <span>{values.tags}</span>
        </div>

        <section className="SectionDescrition">
          <h3>{values.name}</h3>
          <p>{values.description}</p>
        </section>

        <section className="SectionPrice">
          <p>{values.value}</p>
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
      </CoffeeCards>
    );
  });
}
