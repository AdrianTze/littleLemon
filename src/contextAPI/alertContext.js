import React, { createContext, useContext } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [alertState, setAlertState] = React.useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "success",
    // Message to be displayed, can be any string
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...alertState,
        onOpen: (type, message) =>
          setAlertState({ isOpen: true, type, message }),
        onClose: () => setAlertState({ isOpen: false, type: "", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
