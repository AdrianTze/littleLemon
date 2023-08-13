import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import OwnerImage from "../assets/Mario and Adrian A.jpg";
import { Link } from "react-router-dom";
import React from "react";
import useScroll from "../customhooks/useScroll";

const BookingConfirmation = () => {
  const [bookedInfo, setBookedInfo] = React.useState({});
  const { scroll } = useScroll();
  scroll("bookingConfirmation");
  React.useEffect(() => {
    if (localStorage.length !== 0) {
      setBookedInfo({
        ...bookedInfo,
        date: localStorage.getItem("date"),
        time: localStorage.getItem("time"),
        diners: localStorage.getItem("diners"),
        occasion: localStorage.getItem("occasion"),
        seating: localStorage.getItem("seating"),
      });
      return () => {
        // clean up local storage
        // localStorage.removeItem("date");
        // localStorage.removeItem("time");
        // localStorage.removeItem("diners");
        // localStorage.removeItem("occasion");
        // localStorage.removeItem("seating");
        localStorage.clear();
      };
    }
  }, [bookedInfo]);
  return bookedInfo.date !== null ? (
    <Card
      direction={{ base: "column", sm: "row" }}
      className="bookingConfirmation"
      overflow="hidden"
      variant="outline"
      mx={"52"}
      mb={"14"}
      h={"md"}
      bg={"primary.100"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "30rem" }}
        src={OwnerImage}
        alt="Caffe Latte"
      />

      <Stack py={"32"}>
        <CardBody>
          <Heading
            as={"h1"}
            color={"primary.200"}
            fontWeight={"medium"}
            size={"xl"}
          >
            Booking confirmed
          </Heading>
          <Text
            color={"secondary.300"}
          >{`Date Time: ${bookedInfo.date} /  ${bookedInfo.time}`}</Text>
          <Text color={"secondary.300"}>{`Diners: ${bookedInfo.diners}`}</Text>
          <Text
            color={"secondary.300"}
          >{`Occasion: ${bookedInfo.occasion}`}</Text>
          <Text
            color={"secondary.300"}
          >{`Seating: ${bookedInfo.seating} `}</Text>
        </CardBody>

        <CardFooter>
          <Button type="submit" color={"secondary.400"} bg={"primary.200"}>
            <Link to={"/littleLemon"} className="nav-item">
              Home
            </Link>
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  ) : (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mx={"52"}
      mb={"14"}
      h={"md"}
      bg={"primary.100"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "30rem" }}
        src={OwnerImage}
        alt="Caffe Latte"
      />

      <Stack py={"32"}>
        <CardBody>
          <Text color={"secondary.300"}>Session Timeout</Text>
          <Text color={"secondary.300"}>Booking not found</Text>
        </CardBody>

        <CardFooter></CardFooter>
      </Stack>
    </Card>
  );
};

export default BookingConfirmation;
