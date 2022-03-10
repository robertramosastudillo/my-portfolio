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
      link: "https://github.com/robertramosastudillo"
    },
    {
      id: 2,
      title: "Linkedln",
      icon: "linkedin.png",
      link: "https://www.linkedin.com/in/robertramosastudillo"
    },
    {
      id: 3,
      title: "Instagram",
      icon: "instagram.png",
      link: "https://www.instagram.com/robertramosastudillo"
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
          {socialMedia.map(({ id, icon, title, link }) => (
            <BgItem key={id} href={link} target="_blank">
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
