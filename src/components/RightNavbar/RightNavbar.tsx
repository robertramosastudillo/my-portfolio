import React from "react";
import { Ul } from "./RightNavbar.style";

export const RightNavbar = ({ open }: any) => {
  return (
    <Ul open={open}>
      <li>01. Sobre mí</li>
      <li>02. Experiencia</li>
      <li>03. Mi trabajo</li>
      <li>04. Contacto</li>
    </Ul>
  );
};
