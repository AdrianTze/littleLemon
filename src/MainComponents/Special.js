import DishCard from "./DishCard";
import brushetta from "../assets/bruchetta.svg";
import greekSalad from "../assets/greek salad.jpg";
import lemonDessert from "../assets/lemon dessert.jpg";
import { Button, HStack, Heading } from "@chakra-ui/react";

const specialDishes = [
  {
    imgPth: brushetta,
    imgAlt: "An image of brushetta",
    name: "Brushetta",
    price: 13.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    imgPth: greekSalad,
    imgAlt: "An image of Greek Salad",
    name: "Greek Salad",
    price: 13.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    imgPth: lemonDessert,
    imgAlt: "An image of Lemon Dessert",
    name: "Lemon Dessert",
    price: 13.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
];

const Special = () => {
  return (
    <section className="special">
      <HStack wrap={"wrap"} justifyContent={"space-between"} pb={"10"}>
        <Heading
          as={"h1"}
          size={"2xl"}
          color={"primary.100"}
          fontWeight={"medium"}
        >
          Weekly Specials
        </Heading>
        <Button color={"secondary.300"} bg={"primary.100"}>
          Online Menu
        </Button>
      </HStack>
      <HStack wrap={"wrap"} gap={"5"} justifyContent={"center"}>
        {specialDishes.map((dish, index) => {
          return <DishCard key={index} data={dish}></DishCard>;
        })}
      </HStack>
    </section>
  );
};

export default Special;
