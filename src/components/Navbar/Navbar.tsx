import {
  Logo,
  NavbarStyle,
  NavLink,
  RightNavbarHeader,
  StyledBurger,
  Ul,
  RightNavbarHeaderSubTitle,
  RightNavbarHeaderTitle,
} from "./Navbar.style";
import { Link } from "react-scroll";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavbarStyle>
      <Link to="banner-main" spy={true} smooth={true} duration={800}>
        <Logo src="/logo.svg" alt="Robert Ramos" />
      </Link>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
        <RightNavbarHeader>
          <Link
            to="banner-main"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            <RightNavbarHeaderTitle>Robert Ramos</RightNavbarHeaderTitle>
            <RightNavbarHeaderSubTitle>
              Frontend Developer
            </RightNavbarHeaderSubTitle>
          </Link>
        </RightNavbarHeader>
        <NavLink>
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            01. Sobre mí
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            02. Experiencia
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="my-job"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            03. Mi trabajo
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            04. Contacto
          </Link>
        </NavLink>
      </Ul>
    </NavbarStyle>
  );
};
