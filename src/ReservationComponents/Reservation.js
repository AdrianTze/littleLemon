import BookingForm from "./BookingForm";
import { GridItem } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import Payment from "./Payment";
import React, { useState } from "react";
import { useReducer } from "react";
import useScroll from "../customhooks/useScroll";
import { fetchAPI, submitAPI } from "../utils/mockAPI";

const Reservation = ({ navigate }) => {
  const [formData, setFormData] = useState({});
  const { scroll } = useScroll();
  let initialTimes = [];
  let changedDate = "";

  const handleBooking = (data) => {
    if (submitAPI(data)) {
      console.log(data);
      setFormData({ ...formData, ...data });
      scroll("contactform");
    }
  };

  const handleUpdateTimes = (state, action) => {
    // eslint-disable-next-line
    switch (action.type) {
      case "date-change":
        changedDate = action.date;
        return [];
      case "available-times-retrieved":
        return action.times;
      case "initial-times-loaded":
        return action.times;
    }
    throw Error(`Unknown action: ${action.type}`);
  };

  const initializeTimes = () => {
    const today = new Date();
    fetchAPI(today).then((response) => {
      dispatch({ type: "initial-times-loaded", times: response });
    });
  };

  const updateTimes = () => {
    // only runs when the selected date changed
    if (changedDate !== "") {
      fetchAPI(changedDate).then((response) => {
        dispatch({ type: "available-times-retrieved", times: response });
      });
    }
  };

  const [availableTimes, dispatch] = useReducer(
    handleUpdateTimes,
    initialTimes
  );

  React.useEffect(() => {
    localStorage.setItem("date", formData.date);
    localStorage.setItem("time", formData.time);
    localStorage.setItem("diners", formData.diners);
    localStorage.setItem("occasion", formData.occasion);
    localStorage.setItem("seating", formData.seating);
  }, [formData]);

  React.useEffect(() => {
    initializeTimes();
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line
    updateTimes();
    // eslint-disable-next-line
  }, [availableTimes]);

  return (
    <>
      <GridItem pl="2" bg="primary.100" area={"header"}>
        <BookingForm
          slot={availableTimes}
          dispatch={dispatch}
          onBooking={handleBooking}
        ></BookingForm>
      </GridItem>
      <GridItem pl="2" bg="secondary.300" area={"special"}>
        <ContactForm navigate={navigate}></ContactForm>
      </GridItem>
      <GridItem pl="2" bg="primary.100" area={"testimonials"}>
        <Payment></Payment>
      </GridItem>
    </>
  );
};

export default Reservation;
