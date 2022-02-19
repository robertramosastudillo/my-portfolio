import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Logo, NavbarStyle } from "./Navbar.style";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo src="/logo.svg" alt="Robert Ramos" />
      <BurgerMenu />
    </NavbarStyle>
  );
};
