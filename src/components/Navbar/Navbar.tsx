import { Logo, NavbarStyle, StyledBurger, Ul } from "./Navbar.style";
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
        <div>
          <Link
            to="banner-main"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            <h4>Robert Ramos</h4>
            <p>Frontend Developer</p>
          </Link>
        </div>
        <li>
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            01. Sobre mí
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            02. Experiencia
          </Link>
        </li>
        <li>
          <Link
            to="my-job"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            03. Mi trabajo
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => setOpen(!open)}
          >
            04. Contacto
          </Link>
        </li>
      </Ul>
    </NavbarStyle>
  );
};
