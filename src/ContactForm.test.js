import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./ReservationComponents/BookingForm";
import Header from "./MainComponents/Header";
import Reservation from "./ReservationComponents/Reservation";
import { AlertProvider } from "./contextAPI/alertContext";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ContactForm from "./ReservationComponents/ContactForm";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // clean up on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Validate the HTML5 validation is applied to all input fields in ContactForm componnet", () => {
  const navigate = jest.fn();

  act(() => {
    render(
      <AlertProvider>
        <ContactForm navigate={navigate} />
      </AlertProvider>,
      container
    );
  });

  const fnameInput =
    screen.getByText("First Name").parentElement.nextElementSibling;

  expect(fnameInput).toHaveAttribute("aria-required", "true");

  const lnameInput =
    screen.getByText("Last Name").parentElement.nextElementSibling;

  expect(lnameInput).toHaveAttribute("aria-required", "true");

  const phoneInput =
    screen.getByText("Phone Number").parentElement.nextElementSibling;

  expect(phoneInput).toHaveAttribute("aria-required", "true");

  const emailInput = screen.getByText("Email").parentElement.nextElementSibling;

  expect(emailInput).toHaveAttribute("aria-required", "true");
  expect(emailInput).toHaveAttribute("type", "email");

  const passwordInput =
    screen.getByText("Password").parentElement.nextElementSibling.firstChild;

  expect(passwordInput).toHaveAttribute("aria-required", "true");
  expect(passwordInput).toHaveAttribute("type", "password");
});

test("Form Submission Validation in ContactForm componnet", () => {
  const navigate = jest.fn();

  act(() => {
    render(
      <AlertProvider>
        <ContactForm navigate={navigate} />
      </AlertProvider>,
      container
    );
  });

  const fnameInput =
    screen.getByText("First Name").parentElement.nextElementSibling;

  const lnameInput =
    screen.getByText("Last Name").parentElement.nextElementSibling;
  const phoneInput =
    screen.getByText("Phone Number").parentElement.nextElementSibling;

  const emailInput = screen.getByText("Email").parentElement.nextElementSibling;

  const passwordInput =
    screen.getByText("Password").parentElement.nextElementSibling.firstChild;

  const button = screen.getAllByRole("button")[1];
  expect(button).toBeInTheDocument();
});
