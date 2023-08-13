import { extendTheme } from "@chakra-ui/react";
import "@fontsource/markazi-text/400.css";
import "@fontsource/karla/700.css";

const Theme = extendTheme({
  fonts: {
    heading: `"Markazi Text", Karla`,
    body: `'Karla', sans-serif`,
  },
  colors: {
    primary: {
      100: "#495e57",
      200: "#F4CE14",
    },
    secondary: {
      100: "#EE9972",
      200: "#FBDABB",
      300: "#edefee",
      400: "#333333",
    },
  },
});

export default Theme;
