import React from "react";
import { Link } from "react-scroll";
import { Ul } from "./RightNavbar.style";

export const RightNavbar = ({ open }: any) => {
  return (
    <>
      <Ul open={open}>
        <div>
          <h4>Robert Ramos</h4>
          <p>Frontend Developer</p>
        </div>
        <li>
          <Link to="about-me" spy={true} smooth={true} duration={500}>
            01. Sobre mí
          </Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            02. Experiencia
          </Link>
        </li>
        <li>
          <Link to="my-job" spy={true} smooth={true} duration={500}>
            03. Mi trabajo
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            04. Contacto
          </Link>
        </li>
      </Ul>
    </>
  );
};
