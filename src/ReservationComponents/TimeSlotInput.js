import { FormControl, FormLabel, Select, Spinner } from "@chakra-ui/react";

const TimeSlotInput = ({ availableTimes, time, setTime }) => {
  return availableTimes.length === 0 ? (
    <Spinner
      mx={"52"}
      my={"10"}
      thickness="4px"
      speed="0.65s"
      emptyColor="secondary.300"
      color="primary.200"
      size="lg"
    />
  ) : (
    <FormControl w={"md"} px={"20"}>
      <FormLabel htmlFor="res-time" color={"secondary.300"} fontSize={"lg"}>
        Time
      </FormLabel>
      <Select
        variant={"filled"}
        borderColor={"secondary.400"}
        focusBorderColor="primary.200"
        name="res-time"
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
        {availableTimes.map((time, index) => {
          return (
            <option key={index} value={time}>
              {time}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TimeSlotInput;
