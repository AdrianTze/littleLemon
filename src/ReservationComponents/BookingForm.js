import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import restaurantOutdoor from "../assets/restaurant.jpg";
import restaurantStandard from "../assets/restaurant_indoor.jpg";
import TimeSlotInput from "./TimeSlotInput";

const images = [
  {
    imgSrc: restaurantOutdoor,
    alt: "An image illustrating the outdoor seating environment in Little Lemon Restaurant",
  },
  {
    imgSrc: restaurantStandard,
    alt: "An image illustrating the standard indoor seating environment in Little Lemon Restaurant",
  },
];

const BookingForm = (props) => {
  const availableTimes = props.slot;
  const dispatch = props.dispatch;
  const onBooking = props.onBooking;
  const occasions = ["Birthday", "Engagement", "Aniversary", "Other"];

  // Form State
  let todayStr = new Date().toISOString().split("T")[0];
  const [date, setDate] = React.useState(todayStr);
  const [time, setTime] = React.useState(availableTimes[0]);
  const [diners, setDiners] = React.useState(4);
  const [occasion, setOccasion] = React.useState(occasions[0]);
  const [seating, setSeating] = React.useState("Standard");
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleSeatingChanged = (e) => {
    setSeating(e.target.value);
  };

  const getIsBookingFormValid = () => {
    return date && time && diners && occasion && seating;
  };

  // const resetBookingForm = () => {
  //   setDate(new Date().toISOString().split("T")[0]);
  //   setTime(availableTimes[0]);
  //   setDiners(4);
  //   setOccasion(occasions[0]);
  //   setSeating("Standard");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      date: date,
      time: time,
      diners: diners,
      occasion: occasion,
      seating: seating,
    };
    onBooking(formData);
  };

  return (
    <section className="bookingform">
      <VStack alignItems={"flex-start"}>
        <Heading
          as={"h1"}
          color={"primary.200"}
          fontWeight={"medium"}
          size={"3xl"}
        >
          Reservation
        </Heading>

        <Heading
          as={"h2"}
          color={"secondary.300"}
          fontWeight={"medium"}
          size={"xl"}
        >
          Find a table for any occasion
        </Heading>

        <img
          src={seating === "Standard" ? images[1].imgSrc : images[0].imgSrc}
          alt={seating === "Standard" ? images[1].alt : images[0].alt}
          width={"350rem"}
        />
      </VStack>
      <VStack>
        <form onSubmit={handleSubmit}>
          <FormControl w={"md"} px={"20"}>
            <FormLabel
              htmlFor="res-date"
              color={"secondary.300"}
              fontSize={"lg"}
            >
              Date
            </FormLabel>
            <Input
              variant={"filled"}
              placeholder="Enter date"
              borderColor={"secondary.400"}
              focusBorderColor="primary.200"
              type="date"
              name="res-date"
              id="res-date"
              min={todayStr}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setTime("");
                dispatch({
                  type: "date-change",
                  date: new Date(e.target.value),
                });
              }}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <TimeSlotInput
            availableTimes={availableTimes}
            time={time}
            setTime={setTime}
          ></TimeSlotInput>
          <FormControl w={"md"} px={"20"}>
            <HStack>
              <FormLabel
                htmlFor="diners"
                color={"secondary.300"}
                fontSize={"lg"}
              >
                Number of Diners
              </FormLabel>
              <Text pb={"2"} pl={"10"} color={"secondary.300"} fontSize={"2xl"}>
                {diners}
              </Text>
            </HStack>
            <Slider
              name="diners"
              id="diners"
              defaultValue={diners}
              min={2}
              max={10}
              step={1}
              onChange={(v) => setDiners(v)}
              onMouseEnter={(e) => setShowTooltip(true)}
              onMouseLeave={(e) => setShowTooltip(false)}
            >
              <SliderTrack bg="secondary.200">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="primary.200" />
              </SliderTrack>

              <Tooltip
                hasArrow
                bg="secondary.300"
                color="primary.100"
                placement="top"
                isOpen={showTooltip}
                label={`${diners}`}
              >
                <SliderThumb boxSize={4} />
              </Tooltip>
            </Slider>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl w={"md"} px={"20"}>
            <FormLabel
              htmlFor="occasion"
              color={"secondary.300"}
              fontSize={"lg"}
            >
              Occasion
            </FormLabel>
            <Select
              variant={"filled"}
              borderColor={"secondary.400"}
              focusBorderColor="primary.200"
              name="occasion"
              id="occasion"
              value={occasion}
              onChange={(e) => {
                setOccasion(e.target.value);
              }}
            >
              {occasions.map((occasion, index) => {
                return (
                  <option key={index} value={occasion}>
                    {occasion}
                  </option>
                );
              })}
            </Select>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl w={"md"} px={"20"}>
            <FormLabel
              htmlFor="seating"
              color={"secondary.300"}
              fontSize={"lg"}
            >
              Seating Options
            </FormLabel>
            <RadioGroup name="seating" id="seating" defaultValue={seating}>
              <Stack direction="column">
                <Radio
                  name="seating"
                  colorScheme="primary"
                  value="Standard"
                  onChange={handleSeatingChanged}
                >
                  <Text color={"secondary.300"}>Standard</Text>
                </Radio>
                <Radio
                  name="seating"
                  colorScheme="primary"
                  value="Outside"
                  onChange={handleSeatingChanged}
                >
                  <Text color={"secondary.300"}>Outside</Text>
                </Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <Button
            alignSelf={"flex-end"}
            m={"4"}
            ml={"64"}
            type="submit"
            color={"secondary.400"}
            bg={"primary.200"}
            isDisabled={!availableTimes.length || !getIsBookingFormValid()}
          >
            Confirm
          </Button>
        </form>
      </VStack>
    </section>
  );
};

export default BookingForm;
