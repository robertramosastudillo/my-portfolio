import React from "react";
import { HeaderRightNavbar, Ul } from "./RightNavbar.style";

export const RightNavbar = ({ open }: any) => {
  return (
    <>
      <Ul open={open}>
        <div>
          <h4>Robert Ramos</h4>
          <p>Frontend Developer</p>
        </div>
        <li>01. Sobre mí</li>
        <li>02. Experiencia</li>
        <li>03. Mi trabajo</li>
        <li>04. Contacto</li>
      </Ul>
    </>
  );
};
