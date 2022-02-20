import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Logo, NavbarStyle } from "./Navbar.style";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <Link to="banner-main" spy={true} smooth={true} duration={500}>
      <Logo src="/logo.svg" alt="Robert Ramos" />
      </Link>
      <BurgerMenu />
    </NavbarStyle>
  );
};
