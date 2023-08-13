import React from "react";
import "./App.css";
import Nav from "./MainComponents/Nav";
import AboutUs from "./MainComponents/AboutUs";
import Header from "./MainComponents/Header";
import Special from "./MainComponents/Special";
import Testimonial from "./MainComponents/Testimonial";
import Footer from "./MainComponents/Footer";
import Reservation from "./ReservationComponents/Reservation";
import BookingConfirmation from "./ReservationComponents/BookingConfirmation";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Theme from "./Theme";
import { Route, Routes } from "react-router-dom";
import { AlertProvider } from "./contextAPI/alertContext";
import Alert from "./MainComponents/Alert";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <ChakraProvider theme={Theme}>
      <AlertProvider>
        <body>
          <Grid
            templateAreas={`"nav"
                  "header"
                  "special"
                  "testimonials"
                  "about"
                  "footer"`}
            gridTemplateRows={"auto auto 1fr 1fr 1fr auto"}
            gridTemplateColumns={"1fr"}
            h="-webkit-fit-content"
            gap="0"
            fontWeight="bold"
          >
            <GridItem pl="2" bg="white.300" area={"nav"}>
              <Nav></Nav>
            </GridItem>
            <main>
              <Routes>
                <Route
                  path="/littleLemon"
                  element={
                    <>
                      <GridItem pl="2" bg="primary.100" area={"header"}>
                        <Header navigate={navigate}></Header>
                      </GridItem>
                      <GridItem pl="2" bg="white.300" area={"special"}>
                        <Special></Special>
                      </GridItem>
                      <GridItem pl="2" bg="primary.100" area={"testimonials"}>
                        <Testimonial></Testimonial>
                      </GridItem>
                      <GridItem pl="2" bg="secondary.300" area={"about"}>
                        <AboutUs></AboutUs>
                      </GridItem>
                    </>
                  }
                />
                <Route
                  path="/reservation"
                  element={
                    <>
                      <Reservation navigate={navigate}></Reservation>
                    </>
                  }
                />
                <Route
                  path="/reservation-confirmed"
                  element={
                    <>
                      <BookingConfirmation></BookingConfirmation>
                    </>
                  }
                />
              </Routes>
            </main>
            <GridItem pl="2" bg="secondary.200" area={"footer"}>
              <Footer></Footer>
            </GridItem>
          </Grid>
          <Alert></Alert>
        </body>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
