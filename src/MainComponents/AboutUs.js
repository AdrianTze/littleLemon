import { Heading, Text, VStack } from "@chakra-ui/react";
import OwnerImage from "../assets/Mario and Adrian A.jpg";
import OwnerImage2 from "../assets/Mario and Adrian b.jpg";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <VStack p={"5"} alignItems={"start"} maxW={"lg"}>
        <Heading
          as={"h1"}
          color={"primary.100"}
          fontWeight={"medium"}
          size={"3xl"}
        >
          Little Lemon
        </Heading>
        <Heading
          as={"h2"}
          color={"primary.200"}
          fontWeight={"medium"}
          size={"2xl"}
        >
          Chicago
        </Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </VStack>
      <div className="container">
        <img
          className="stackImage"
          src={OwnerImage2}
          alt="Adrian and Mario are having a conversation in the kitchen"
        />
        <img
          className="stackImage"
          src={OwnerImage}
          alt="Adrian and Mario are smiling while looking at their hand-made dish"
        />
      </div>
    </section>
  );
};

export default AboutUs;
