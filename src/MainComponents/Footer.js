import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import facebookIcon from "../assets/socialMedia/facebook.png";
import InstagramIcon from "../assets/socialMedia/instagram.png";
import LinkedInIcon from "../assets/socialMedia/linkedin.png";
import TwitterIcon from "../assets/socialMedia/twitter.png";
import YouTubeIcon from "../assets/socialMedia/youtube.png";

const socialMediaIcons = [
  {
    src: facebookIcon,
    alt: "Facebook icon",
    url: "https://www.facebook.com/",
  },
  {
    src: InstagramIcon,
    alt: "Instagram icon",
    url: "https://www.instagram.com/",
  },
  {
    src: LinkedInIcon,
    alt: "LinkedIn icon",
    url: "https://www.linkedin.com/",
  },
  {
    src: TwitterIcon,
    alt: "Twitter icon",
    url: "https://twitter.com/",
  },
  {
    src: YouTubeIcon,
    alt: "YouTube icon",
    url: "https://www.youtube.com/",
  },
];

const Footer = () => {
  const handleClick = (anchor) => () => {
    const className = `${anchor}`;
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <footer>
        <img src={logo} alt="Little Lemon Logo" width={"300px"} />
        <ul>
          <li>
            <Link to={"/"} className="nav-item" onClick={handleClick("header")}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="nav-item"
              onClick={handleClick("aboutus")}
            >
              About
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-item">
              Menu
            </Link>
          </li>
          <li>
            <Link to={"/reservation"} className="nav-item">
              Reservation
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-item">
              Order Online
            </Link>
          </li>
          <li>
            <Link to={"/"} className="nav-item">
              Login
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <p>123 Example St LL 321</p>
          </li>
          <li>
            <p>04XX-XXX-XXX</p>
          </li>
          <li>
            <p>
              <a href="mailto:littlelemon@example.com">
                littlelemon@example.com
              </a>
            </p>
          </li>
        </ul>

        <ul>
          <li>
            <p>Follow Us</p>
          </li>
          {socialMediaIcons.map((icon, index) => {
            return (
              <li key={index}>
                <a href={icon.url}>
                  <img src={icon.src} alt={icon.alt} width={"30rem"} />
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
      <p>&copy; Copyrights reserved</p>
    </>
  );
};

export default Footer;
