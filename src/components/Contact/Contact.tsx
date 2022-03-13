import React from "react";
import { SectionContainer, SectionTitle } from "../../styles/CommonComponents";
import {
  ContainerContact,
  ContainerInfoContact,
  ContactText,
  ContainerContactIcons,
  BgItem,
  ItemImage,
  ContainerContactCopyright,
  ContactTextSend,
} from "./Contact.style";

export const Contact = () => {
  const socialMedia = [
    {
      id: 1,
      title: "Github",
      image: "github.png",
      url: "https://github.com/robertramosastudillo",
    },
    {
      id: 2,
      title: "Linkedln",
      image: "linkedin.png",
      url: "https://www.linkedin.com/in/robertramosastudillo",
    },
    {
      id: 3,
      title: "Instagram",
      image: "instagram.png",
      url: "https://www.instagram.com/robertramosastudillo",
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
            Si deseas comunicarte conmigo o te interesa comenzar un proyecto
            juntos, pónte en contacto.
          </ContactText>

          <ContactTextSend href="mailto:robertramosastudillo@gmail.com">
            Envíame un correo.
          </ContactTextSend>
          <ContactText>Robertramosastudillo@gmail.com</ContactText>

          <ContactTextSend
            href="https://api.whatsapp.com/send?phone=573176488465&amp;text=Hola como estas? estoy interesad@ en comenzar un proyecto contigo"
            target="_blank"
          >
            Escribeme al Whatsapp
          </ContactTextSend>
          <ContactText>+57 317 648 8465</ContactText>
          <p>O envíame un mensaje directo en mis redes sociales.</p>
        </ContainerInfoContact>
        <ContainerContactIcons>
          {socialMedia.map(({ id, image, title, url }) => (
            <BgItem key={id} href={url} target="_blank">
              <ItemImage src={`social-media/${image}`} alt={title} />
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
