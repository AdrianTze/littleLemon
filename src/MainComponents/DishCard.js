import Icon from "@mdi/react";
import { mdiMoped } from "@mdi/js";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";

const DishCard = function (props) {
  const { imgPth, imgAlt, name, price, description } = props.data;

  return (
    <>
      <Card maxW={"280"} bg={"secondary.300"}>
        <CardBody>
          <Image
            src={imgPth}
            alt={imgAlt}
            borderRadius="lg"
            width={"lg"}
            height={"6xs"}
          />
          <HStack justifyContent={"space-between"}>
            <Heading fontSize={"2xl"} py={"3"}>
              {name}
            </Heading>
            <Text fontSize={"xl"} color={"secondary.100"} fontWeight={"bold"}>
              {price}
            </Text>
          </HStack>

          <Text fontSize={"sm"} paddingBottom={"4"}>
            {description}
          </Text>
          <HStack>
            <Text>Order a delivery</Text>
            <Icon path={mdiMoped} size={1} color={"green"} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default DishCard;
