import { ListItem, UnorderedList } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import useScroll from "../customhooks/useScroll";

const Nav = () => {
  const { scroll } = useScroll();

  return (
    <nav>
      <UnorderedList>
        <ListItem>
          <img src={logo} alt="Little Lemon Logo" width={"200px"} />
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item" onClick={() => scroll("header")}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item" onClick={() => scroll("aboutus")}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item" onClick={() => scroll("special")}>
            Menu
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/reservation"} className="nav-item">
            Reservation
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item">
            Order Online
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item">
            Login
          </Link>
        </ListItem>
      </UnorderedList>
    </nav>
  );
};

export default Nav;
