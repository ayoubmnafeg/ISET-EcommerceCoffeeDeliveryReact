import latte from "../assets/coffees/latte.png";
import arabe from "../assets/coffees/arabe.png";
import cubano from "../assets/coffees/cubano.png";
import irlandes from "../assets/coffees/irlandes.png";
import havaiano from "../assets/coffees/havaiano.png";
import expresso from "../assets/coffees/americano1.png";
import americano from "../assets/coffees/americano.png";
import capuccino from "../assets/coffees/capuccino.png";
import macchiato from "../assets/coffees/macchiato.png";
import mocaccino from "../assets/coffees/mocaccino.png";
import cafe_gelado from "../assets/coffees/gelado.png";
import cafe_com_leite from "../assets/coffees/leite.png";
import expresso_cremoso from "../assets/coffees/cremoso.png";
import chocolate_quente from "../assets/coffees/chocolate.png";

const menu = [
  {
    id: "1",
    title: "traditional espresso",
    tags: ["Traditional"],
    description: "Traditional coffee made with hot water and ground beans",
    srcImg: expresso,
    price: "9,90",
    amount: 0,
  },
  {
    id: "2",
    title: "American Express",
    tags: ["Traditional"],
    description: "Diluted espresso, less intense than the traditional one",
    srcImg: americano,
    price: "9,90",
    amount: 0,
  },
  {
    id: "3",
    title: "creamy espresso",
    tags: ["Traditional"],
    description: "Traditional espresso with creamy foam",
    srcImg: expresso_cremoso,
    price: "9,90",
    amount: 0,
  },
  {
    id: "4",
    title: "Iced Espresso",
    tags: ["Traditional", "Ice cold"],
    description: "Drink prepared with espresso coffee and ice cubes",
    srcImg: cafe_gelado,
    price: "9,90",
    amount: 0,
  },
  {
    id: "5",
    title: "Café With milk",
    tags: ["Traditional", "With milk"],
    description: "Half and half traditional espresso with steamed milk",
    srcImg: cafe_com_leite,
    price: "9,90",
    amount: 0,
  },
  {
    id: "6",
    title: "Latte",
    tags: ["Traditional", "With milk"],
    description:
      "A shot of espresso, with twice as much milk and creamy foam",
    srcImg: latte,
    price: "9,90",
    amount: 0,
  },
  {
    id: "7",
    title: "Capuccino",
    tags: ["Traditional", "With milk"],
    description:
      "Cinnamon drink made from equal doses of coffee, milk and foam",
    srcImg: capuccino,
    price: "9,90",
    amount: 0,
  },
  {
    id: "8",
    title: "macchiato",
    tags: ["Traditional", "With milk"],
    description:
      "Espresso coffee mixed with a little hot milk and foam",
    srcImg: macchiato,
    price: "9,90",
    amount: 0,
  },
  {
    id: "9",
    title: "Moccacino",
    tags: ["Traditional", "With milk"],
    description: "Espresso coffee with chocolate sauce, a little milk and foam",
    srcImg: mocaccino,
    price: "9,90",
    amount: 0,
  },
  {
    id: "10",
    title: "Hot chocolate",
    tags: ["Special", "With milk"],
    description: "Drink made with chocolate dissolved in hot milk and coffee",
    srcImg: chocolate_quente,
    price: "9,90",
    amount: 0,
  },
  {
    id: "11",
    title: "Cuban",
    tags: ["Special", "Alcoholic", "Ice cold"],
    description:
      "Iced espresso drink with rum, cream and mint",
    srcImg: cubano,
    price: "9,90",
    amount: 0,
  },
  {
    id: "12",
    title: "Hawaiian",
    tags: ["Special"],
    description: "Sweet drink prepared with coffee and coconut milk",
    srcImg: havaiano,
    price: "9,90",
    amount: 0,
  },
  {
    id: "13",
    title: "Árabe",
    tags: ["Special"],
    description: "Drink prepared with Arabic coffee beans and spices",
    srcImg: arabe,
    price: "9,90",
    amount: 0,
  },
  {
    id: "14",
    title: "Irish",
    tags: ["Special", "Alcoholic"],
    description: "Drink based on coffee, Irish whiskey, sugar and whipped cream",
    srcImg: irlandes,
    price: "9,90",
    amount: 0,
  },
  {
    id: "15",
    title: "vegan latte",
    tags: ["Special", "Vegan"],
    description:
      "A shot of espresso with soy milk and creamy foam",
    srcImg: latte,
    price: "9,90",
    amount: 0,
  },
  {
    id: "16",
    title: "ice cream american",
    tags: ["Traditional", "Gelado"],
    description: "Drink prepared with American espresso and ice cubes",
    srcImg: americano,
    price: "9,90",
    amount: 0,
  },
];

export default menu;
