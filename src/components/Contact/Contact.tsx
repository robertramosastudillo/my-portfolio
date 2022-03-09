import React from "react";
import { SectionContainer, SectionTitle } from "../../styles/CommonComponents";
import {
  ContactTextBold,
  ContainerContact,
  ContainerInfoContact,
  ContactText,
  ContainerContactIcons,
  BgItem,
  ItemImage,
  ContainerContactCopyright,
} from "./Contact.style";

export const Contact = () => {
  const socialMedia = [
    {
      id: 1,
      title: "Github",
      icon: "github.png",
    },
    {
      id: 2,
      title: "Linkedln",
      icon: "linkedin.png",
    },
    {
      id: 3,
      title: "Instagram",
      icon: "instagram.png",
    },
  ];

  return (
    <SectionContainer>
      <ContainerContact id="contact">
        <ContainerInfoContact>
          <SectionTitle>
            <span>04.</span>Contácto
          </SectionTitle>
          <ContactText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </ContactText>

          <ContactTextBold>Robertramos@gmail.com</ContactTextBold>
          <ContactTextBold>+57 315 853 8138</ContactTextBold>
        </ContainerInfoContact>
        <ContainerContactIcons>
          {socialMedia.map(({ id, icon, title }) => (
            <BgItem key={id}>
              <ItemImage src={`social-media/${icon}`} alt={title} />
            </BgItem>
          ))}
        </ContainerContactIcons>

        <ContainerContactCopyright>
          <p>Robert Ramos</p>
          <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
        </ContainerContactCopyright>
      </ContainerContact>
    </SectionContainer>
  );
};
