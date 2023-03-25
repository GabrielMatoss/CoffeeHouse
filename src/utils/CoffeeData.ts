export interface ListCoffeeProps {
  id: number;
  src: string;
  name: string;
  tags: string[];
  description: string;
  value: number;
}

export const listCoffee: ListCoffeeProps[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    src: "expresso.png",
    tags: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    value: 5.5,
  },
  {
    id: 2,
    name: "Expresso Americano",
    src: "expressoAmericano.png",
    tags: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    value: 5.0,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    src: "expressoCremoso.png",
    tags: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    value: 6.0,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    src: "expressoGelado.png",
    tags: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: 4.75,
  },
  {
    id: 5,
    name: "Café com Leite",
    src: "cafeComLeite.png",
    tags: ["Tradicional", "Com Leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    value: 7.85,
  },
  {
    id: 6,
    name: "Latte",
    src: "latte.png",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: 6.25,
  },
  {
    id: 7,
    name: "Capuccino",
    src: "capuccino.png",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: 8.0,
  },
  {
    id: 8,
    name: "Macchiato",
    src: "macchiato.png",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    value: 8.25,
  },
  {
    id: 9,
    name: "Mocaccino",
    src: "mocaccino.png",
    tags: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: 9.5,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    src: "chocolateQuente.png",
    tags: ["Especial", "Com Leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: 9.0,
  },
  {
    id: 11,
    name: "Cubano",
    src: "cubano.png",
    tags: ["Especial", "Alcoólico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: 8.9,
  },
  {
    id: 12,
    name: "Havaiano",
    src: "havaiano.png",
    tags: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    value: 9.5,
  },
  {
    id: 13,
    name: "Árabe",
    src: "arabe.png",
    tags: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    value: 9.9,
  },
  {
    id: 14,
    name: "Irlandês",
    src: "irlandes.png",
    tags: ["Especial", "Alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: 9.25,
  },
];
