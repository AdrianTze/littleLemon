import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import useSubmit from "../customhooks/useSubmit";
import { useAlertContext } from "../contextAPI/alertContext";
import { useState } from "react";

// /^[+]?01[0-9]{1}[-]?[0-9]{3}[-]?[0-9]{4}$/

const ContactForm = ({ navigate }) => {
  const [show, setShow] = useState(false);
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const phoneRegex = new RegExp(
    /^[+]?[6]?01[0-9]{1}[-]?[0-9]{3}[-]?[0-9]{4}$/,
    "i"
  );
  const passwordRegex = new RegExp(
    /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/
  );

  const contactFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      comment: "",
    },
    onSubmit: (values, actions) => {
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   actions.setSubmitting(false);
      // }, 1000);
      submit(null, values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      phone: Yup.string()
        .trim()
        .matches(phoneRegex, "Invalid phone given")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .trim()
        .matches(passwordRegex, "Invalid password given")
        .required("Required"),
      comment: Yup.string(),
    }),
  });

  useEffect(() => {
    if (!response) {
      return;
    }
    onOpen(response.type, response.message);

    if (response.type === "success") {
      contactFormik.resetForm();
      navigate("/reservation-confirmed");
    }
    // eslint-disable-next-line
  }, [response]);

  return (
    <section className="contactform">
      <HStack wrap={"wrap"} justifyContent={"space-evenly"} pb={"10"}>
        <img src={logo} alt="Little Lemon Logo" width={"300rem"} />
        <Heading as={"h1"} color={"secondary.400"} fontWeight={"semi-bold"}>
          Contact Form
        </Heading>
      </HStack>

      <form onSubmit={contactFormik.handleSubmit}>
        <FormControl
          isRequired
          isInvalid={
            contactFormik.touched.firstName &&
            contactFormik.errors.firstName !== undefined
          }
          maxW={"5xl"}
          px={"20"}
        >
          <HStack>
            <FormLabel
              htmlFor="firstName"
              color={"secondary.400"}
              fontSize={"lg"}
            >
              First Name
            </FormLabel>
            <FormErrorMessage pb={"4"}>
              {contactFormik.errors.firstName}
            </FormErrorMessage>
          </HStack>

          <Input
            variant={"filled"}
            placeholder="*** First Name"
            borderColor={"secondary.400"}
            focusBorderColor="primary.200"
            type="text"
            name="firstName"
            id="firstName"
            {...contactFormik.getFieldProps("firstName")}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={
            contactFormik.touched.lastName &&
            contactFormik.errors.lastName !== undefined
          }
          maxW={"5xl"}
          px={"20"}
        >
          <HStack>
            <FormLabel
              htmlFor="lastName"
              color={"secondary.400"}
              fontSize={"lg"}
            >
              Last Name
            </FormLabel>
            <FormErrorMessage pb={"4"}>
              {contactFormik.errors.lastName}
            </FormErrorMessage>
          </HStack>
          <Input
            variant={"filled"}
            placeholder="*** Last Name"
            borderColor={"secondary.400"}
            focusBorderColor="primary.200"
            type="text"
            name="lastName"
            id="lastName"
            {...contactFormik.getFieldProps("lastName")}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={
            contactFormik.touched.phone &&
            contactFormik.errors.phone !== undefined
          }
          maxW={"5xl"}
          px={"20"}
        >
          <HStack>
            <FormLabel htmlFor="phone" color={"secondary.400"} fontSize={"lg"}>
              Phone Number
            </FormLabel>
            <FormErrorMessage pb={"4"}>
              {contactFormik.errors.phone}
            </FormErrorMessage>
          </HStack>
          <Input
            variant={"filled"}
            placeholder="*** 01X XXX XXXX"
            borderColor={"secondary.400"}
            focusBorderColor="primary.200"
            type="text"
            name="phone"
            id="phone"
            {...contactFormik.getFieldProps("phone")}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={
            contactFormik.touched.email &&
            contactFormik.errors.email !== undefined
          }
          maxW={"5xl"}
          px={"20"}
        >
          <HStack>
            <FormLabel htmlFor="email" color={"secondary.400"} fontSize={"lg"}>
              Email
            </FormLabel>
            <FormErrorMessage pb={"4"}>
              {contactFormik.errors.email}
            </FormErrorMessage>
          </HStack>
          <Input
            variant={"filled"}
            placeholder="*** johndoe@gmail.com"
            borderColor={"secondary.400"}
            focusBorderColor="primary.200"
            type="email"
            name="email"
            id="email"
            {...contactFormik.getFieldProps("email")}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={
            contactFormik.touched.password &&
            contactFormik.errors.password !== undefined
          }
          maxW={"5xl"}
          px={"20"}
        >
          <HStack>
            <FormLabel
              htmlFor="password"
              color={"secondary.400"}
              fontSize={"lg"}
            >
              Password
            </FormLabel>
            <FormErrorMessage pb={"4"}>
              {contactFormik.errors.password}
            </FormErrorMessage>
          </HStack>
          <InputGroup>
            <Input
              variant={"filled"}
              placeholder="*** Password"
              borderColor={"secondary.400"}
              focusBorderColor="primary.200"
              type={show ? "text" : "password"}
              id="password"
              name="password"
              {...contactFormik.getFieldProps("password")}
            />
            <InputRightElement width={"4.5rem"}>
              <Button
                h={"1.75rem"}
                size={"sm"}
                color={"primary.100"}
                bg={"gray.300"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <FormHelperText>
            Your password should consist of at least 8 characters
          </FormHelperText>
          <FormHelperText>
            At least 1 uppercase, 1 lowercase and 1 special character in them.
          </FormHelperText>
        </FormControl>

        <FormControl maxW={"5xl"} px={"20"}>
          <FormLabel
            optionalIndicator
            htmlFor="password"
            color={"secondary.400"}
            fontSize={"lg"}
          >
            Additional information we should know
          </FormLabel>
          <Textarea
            variant={"filled"}
            placeholder="Special Request / Dietary Requirements"
            borderColor={"secondary.400"}
            focusBorderColor="primary.200"
            {...contactFormik.getFieldProps("comment")}
          />
        </FormControl>
        <Button
          isDisabled={!contactFormik.isValid}
          isLoading={isLoading}
          type="submit"
          alignSelf={"center"}
          maxW={"lg"}
          color={"secondary.400"}
          bg={"primary.200"}
        >
          Continue
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
