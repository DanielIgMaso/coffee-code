export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Expresso Java",
    description: "Café forte e concentrado, ideal para rodar códigos complexos.",
    price: 8.00,
    category: "Cafés",
    image: "/images/ExpressoJava.jpg"
  },
  {
    id: 2,
    name: "Cappuccino Full Stack",
    description: "O equilíbrio perfeito entre espuma (frontend) e café (backend).",
    price: 12.50,
    category: "Cafés",
    image: "/images/CappuccinoFullStack.jpg"
  },
  {
    id: 3,
    name: "Latte Python",
    description: "Suave, cremoso e fácil de digerir. O favorito dos iniciantes.",
    price: 11.00,
    category: "Cafés",
    image: "/images/LattePython.jpg"
  },
  {
    id: 4,
    name: "Bug Muffin",
    description: "Você não sabe o que tem dentro, mas é delicioso.",
    price: 9.00,
    category: "Comidas",
    image: "/images/BugMuffin.jpg"
  },
  {
    id: 5,
    name: "Croissant 404",
    description: "A massa folhada que você estava procurando não foi encontrada.",
    price: 10.00,
    category: "Comidas",
    image: "/images/Croissant404.jpg"
  }
];