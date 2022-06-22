import React from "react";
import socialMedia from "../../mocks/socialMedia.json";

import { SectionTitle } from "../../styles/CommonComponents";
import {
  ContainerContact,
  ContainerInfoContact,
  ContactText,
  ContainerContactIcons,
  BgItem,
  ItemImage,
  ContainerContactCopyright,
  ContactTextSend,
  ContainerBackgroundContact,
  ContainerOfCoContact,
  BgContact,
  // ContainerSecondaryHexan,
  BgContactSecondary,
  ContainerFooter,
} from "./Contact.style";

export const Contact = () => {
  return (
    <ContainerContact id="contact">
      <ContainerBackgroundContact>
        <BgContact src="about-me/hexagon-bg-primary.svg" alt="Bg Contact" />
        <BgContactSecondary src="contact/message.svg" alt="Contactame" />
      </ContainerBackgroundContact>

      <ContainerOfCoContact>
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
              <ItemImage
                src={`social-media/${image}`}
                alt={title}
                width="24"
                height="24"
              />
            </BgItem>
          ))}
        </ContainerContactIcons>

        <ContainerContactCopyright>
          <p>Robert Ramos</p>
          <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
        </ContainerContactCopyright>
      </ContainerOfCoContact>
    </ContainerContact>
  );
};
