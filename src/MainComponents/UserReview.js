import { Avatar, Card, HStack, Heading, Text } from "@chakra-ui/react";

const UserRating = (props) => {
  const { imgSrc, fname, rating, review } = props.data;

  return (
    <Card
      bg={"secondary.300"}
      maxW={"3xs"}
      align={"center"}
      justify={"center"}
      p={"5"}
    >
      <Avatar name={fname} src={imgSrc} bg={"secondary.200"} size={"xl"} />
      <HStack>
        <Heading as={"h4"} fontSize={"lg"} p={"2"}>
          {fname}
        </Heading>
        <Heading as={"h4"} fontSize={"2xl"} p={"2"}>
          {rating}
        </Heading>
      </HStack>

      <Text fontStyle={"italic"} fontWeight={"medium"} fontSize={"sm"}>
        {review}
      </Text>
    </Card>
  );
};

export default UserRating;
