import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import bookingConfirmation from "../assets/restauranfood.jpg";
import { AiFillCreditCard } from "react-icons/ai";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        bg={"secondary.300"}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "secondary.100",
          borderColor: "secondary.100",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function Example() {
  const options = [<FaCcMastercard size={40} />, <FaCcVisa size={40} />];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value, index) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={index} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

const Payment = () => {
  return (
    <section className="payment">
      <VStack alignItems={"flex-start"}>
        <Heading
          as={"h1"}
          color={"primary.200"}
          fontWeight={"medium"}
          size={"3xl"}
          pb={"6"}
        >
          Payment
        </Heading>

        <Example />

        <FormControl w={"md"} pr={"20"}>
          <FormLabel htmlFor="cardno" color={"secondary.300"} fontSize={"lg"}>
            Credit Card Number
          </FormLabel>
          <Input
            variant={"filled"}
            placeholder="XXXX-XXXX-XXXX-XXXX"
            borderColor={"secondary.400"}
            focusBorderColor="primary.200"
            type="text"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl w={"md"} pr={"20"}>
          <FormLabel
            htmlFor="cardholder"
            color={"secondary.300"}
            fontSize={"lg"}
          >
            Card Holder Name
          </FormLabel>
          <Input
            variant={"filled"}
            placeholder="Card Holder Name"
            borderColor={"secondary.400"}
            focusBorderColor="primary.200"
            type="text"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <HStack>
          <FormControl w={"3xs"} pr={"10"}>
            <FormLabel htmlFor="expiry" color={"secondary.300"} fontSize={"lg"}>
              Expiry Date
            </FormLabel>
            <Input
              variant={"filled"}
              placeholder="(MM/YY)"
              borderColor={"secondary.400"}
              focusBorderColor="primary.200"
              type="text"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl w={"3xs"} pr={"16"}>
            <FormLabel htmlFor="cvc" color={"secondary.300"} fontSize={"lg"}>
              CVC
            </FormLabel>
            <InputGroup>
              <Input
                variant={"filled"}
                placeholder="XXX"
                borderColor={"secondary.400"}
                focusBorderColor="primary.200"
                type="text"
              />
              <InputRightElement color={"secondary.100"}>
                <AiFillCreditCard size={30} />
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </HStack>
      </VStack>
      <Card maxW={"280"} bg={"secondary.300"}>
        <CardBody>
          <Image
            src={bookingConfirmation}
            alt={"A restaurant chef sprinkling garnish to the cuisine"}
            borderRadius="lg"
            width={"lg"}
            height={"3xs"}
          />
          <Heading as={"h3"} fontSize={"xl"} py={"3"}>
            Booking Fee
          </Heading>
        </CardBody>
        <Divider />
        <CardFooter flexDirection={"column"}>
          <HStack width={"3xs"} justifyContent={"space-between"}>
            <Text fontSize={"md"}>Deposit</Text>
            <Text>$ 10.00</Text>
          </HStack>
          <HStack width={"3xs"} justifyContent={"space-between"}>
            <Heading as={"h2"} fontSize={"2xl"}>
              Total
            </Heading>
            <Text>$ 10.00</Text>
          </HStack>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Payment;
