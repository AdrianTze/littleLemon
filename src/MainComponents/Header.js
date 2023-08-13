import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import landingImage from "../assets/restaurant chef B.jpg";

const Header = ({ navigate }) => {
  return (
    <>
      <header className="header">
        <VStack maxW={"lg"} alignItems={"flex-start"}>
          <Heading
            as={"h1"}
            color={"primary.200"}
            fontWeight={"medium"}
            size={"3xl"}
          >
            Little Lemon
          </Heading>
          <Heading
            as={"h2"}
            color={"secondary.300"}
            fontWeight={"medium"}
            size={"2xl"}
          >
            Chicago
          </Heading>
          <Text marginBottom={"3"}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes, served with a modern twist
          </Text>
          <Button
            color={"secondary.400"}
            bg={"primary.200"}
            onClick={() => {
              navigate("/Reservation");
            }}
          >
            Reserve a table
          </Button>
        </VStack>
        <img
          src={landingImage}
          alt="A restaurant chef sprinkling garnish to the cuisine"
          width={"400rem"}
        />
      </header>
    </>
  );
};

export default Header;
