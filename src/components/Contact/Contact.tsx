import React from "react";
import { SectionContainer, SectionTitle } from "../../styles/CommonComponents";
import { ContainerContact, ContainerInfoContact } from "./Contact.style";

export const Contact = () => {
  return (
    <SectionContainer>
      <ContainerContact id="contact">
      <ContainerInfoContact>
        <SectionTitle>
          <span>04.</span>Contácto
        </SectionTitle>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>

        <p>Robertramos@gmail.com</p>
        <p>+57 315 853 8138</p>
      </ContainerInfoContact>
      </ContainerContact>
    </SectionContainer>
  );
};
