import {
  Logo,
  NavbarStyle,
  NavLink,
  RightNavbarHeader,
  StyledBurger,
  Ul,
  RightNavbarHeaderSubTitle,
  RightNavbarHeaderTitle,
  NavLinkLogo,
} from "./Navbar.style";
import { Link } from "react-scroll";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavbarStyle>
      <Link to="banner-main" spy={true} smooth={true} duration={800} href="/">
        <Logo src="navbar/logo.svg" alt="Robert Ramos" />
      </Link>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
        <RightNavbarHeader>
          <li>
            <NavLinkLogo
              to="banner-main"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => setOpen(!open)}
              href="/"
            >
              <RightNavbarHeaderTitle>Robert Ramos</RightNavbarHeaderTitle>
              <RightNavbarHeaderSubTitle>
                Full Stack Developer
              </RightNavbarHeaderSubTitle>
            </NavLinkLogo>
          </li>
        </RightNavbarHeader>
        {/* <NavLink> */}
        <li>
          <NavLink
            to="about-me"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
            activeClass="active"
            href="/"
          >
            01. Sobre mí
          </NavLink>
        </li>
        {/* </NavLink>
        <NavLink> */}
        <li>
          <NavLink
            to="experience"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
            activeClass="active"
            href="/"
          >
            02. Experiencia
          </NavLink>
        </li>
        {/* </NavLink>
        <NavLink> */}
        <li>
          <NavLink
            to="my-job"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
            activeClass="active"
            href="/"
          >
            03. Mi trabajo
          </NavLink>
        </li>
        {/* </NavLink>
        <NavLink> */}
        <li>
          <NavLink
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
            activeClass="active"
            href="/"
          >
            04. Contacto
          </NavLink>
        </li>
        {/* </NavLink> */}
      </Ul>
    </NavbarStyle>
  );
};
