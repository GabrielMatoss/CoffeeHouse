import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CoffeeCards } from "./styles";
import { listImgCoffee } from "../../utils/imagesCoffeeLib";
interface listCoffeeProps {
  id: number;
  src: string;
  name: string;
  tags: string[];
  description: string;
  value: string;
}

export const listCoffee: listCoffeeProps[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    src: `${listImgCoffee[0]}`,
    tags: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    value: "9,90",
  },
  {
    id: 2,
    name: "Expresso Americano",
    src: `${listImgCoffee[1]}`,
    tags: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    value: "9,90",
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    src: `${listImgCoffee[2]}`,
    tags: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    value: "9,90",
  },
  {
    id: 4,
    name: "Expresso Gelado",
    src: `${listImgCoffee[3]}`,
    tags: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: "9,90",
  },
  {
    id: 5,
    name: "Café com Leite",
    src: `${listImgCoffee[4]}`,
    tags: ["Tradicional", "Com Leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    value: "9,90",
  },
  {
    id: 6,
    name: "Latte",
    src: `${listImgCoffee[5]}`,
    tags: ["Tradicional", "Com Leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: "9,90",
  },
  {
    id: 7,
    name: "Capuccino",
    src: `${listImgCoffee[6]}`,
    tags: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: "9,90",
  },
  {
    id: 8,
    name: "Macchiato",
    src: `${listImgCoffee[7]}`,
    tags: ["Tradicional", "Com Leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    value: "9,90",
  },
  {
    id: 9,
    name: "Mocaccino",
    src: `${listImgCoffee[8]}`,
    tags: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: "9,90",
  },
  {
    id: 10,
    name: "Chocolate Quente",
    src: `${listImgCoffee[9]}`,
    tags: ["Especial", "Com Leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: "9,90",
  },
  {
    id: 11,
    name: "Cubano",
    src: `${listImgCoffee[10]}`,
    tags: ["Especial", "Alcoólico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: "9,90",
  },
  {
    id: 12,
    name: "Havaiano",
    src: `${listImgCoffee[11]}`,
    tags: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    value: "9,90",
  },
  {
    id: 13,
    name: "Árabe",
    src: `${listImgCoffee[12]}`,
    tags: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    value: "9,90",
  },
  {
    id: 14,
    name: "Irlandês",
    src: `${listImgCoffee[13]}`,
    tags: ["Especial", "Alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: "9,90",
  },
];

//Mandar a lista e a interface se pa para o CoffeeList
export function CoffeeCard() {
  const [cards, setCards] = useState<listCoffeeProps[]>(listCoffee);

  return cards.map((values: any) => {
    return (
      <CoffeeCards key={values.id}>
        <img src={values.src} alt="" />
        <div className="SectionCoffeeTag">
          {values.tags.map((teste: any) => {
            return <span key={teste}>{teste}</span>;
          })}
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
