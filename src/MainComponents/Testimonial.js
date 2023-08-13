import { Heading } from "@chakra-ui/react";
import UserReview from "./UserReview.js";
import { Carousel } from "flowbite-react";

const userData = [
  {
    imgSrc: "https://bit.ly/dan-abramov",
    fname: "Dan Abrahmov",
    rating: 8.5,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
  {
    imgSrc: "https://bit.ly/ryan-florence",
    fname: "Ryan Florence",
    rating: 7.5,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
  {
    imgSrc: "https://bit.ly/kent-c-dodds",
    fname: "Kent Dodds",
    rating: 9,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
  {
    imgSrc: "https://bit.ly/tioluwani-kolawole",
    fname: "Kola Tioluwani",
    rating: 9,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
  {
    imgSrc: "https://bit.ly/prosper-baba",
    fname: "Prosper Otemuyiwa",
    rating: 9,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
  {
    imgSrc: "https://bit.ly/code-beast",
    fname: "Christian Nwamba",
    rating: 9,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
  {
    imgSrc: "https://bit.ly/sage-adebayo",
    fname: "Segun Adebayo",
    rating: 9,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials">
      <Heading
        as={"h1"}
        size={"2xl"}
        color={"primary.200"}
        fontWeight={"medium"}
      >
        Testimonials
      </Heading>

      <Carousel className="w-96 py-12 pl-20">
        {userData.map((user, index) => {
          return <UserReview key={index} data={user}></UserReview>;
        })}
      </Carousel>
    </section>
  );
};

export default Testimonial;
