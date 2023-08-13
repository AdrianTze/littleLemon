import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useAlertContext } from "../contextAPI/alertContext";
const Alert = () => {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = React.useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? "primary.100" : "secondary.400"}
        >
          <AlertDialogHeader
            fontSize="lg"
            fontWeight="bold"
            color={"primary.200"}
          >
            {isSuccess ? "Reservation Success!" : "Oops!"}
          </AlertDialogHeader>
          <AlertDialogBody color={"secondary.300"} textAlign={"center"}>
            {message}
          </AlertDialogBody>
          <AlertDialogFooter alignContent={"center"}>
            <Button
              bg={"secondary.300"}
              color={"primary.100"}
              onClick={onClose}
              ml={3}
              mr={"44"}
            >
              Ok
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default Alert;
