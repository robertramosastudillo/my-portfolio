import React, { useEffect, useState } from "react";
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
  BgContactSecondary,
} from "./Contact.style";
import carousel from "../../mocks/carouselContact.json";

interface CarouselProps {
  text: string;
  image: string;
}

export const Contact = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string>(carousel[0].image);
  const [selectedText, setSelectedText] = useState<string>(carousel[0].text);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, carousel);
    }, 4000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (
    index: number,
    carousel: CarouselProps[],
    next: boolean = true
  ) => {
    const condition = next ? index < carousel.length - 1 : index > 0;
    const nextIndex = next
      ? condition
        ? index + 1
        : 0
      : condition
      ? index - 1
      : carousel.length - 1;
    setSelectedImage(carousel[nextIndex].image);
    setSelectedText(carousel[nextIndex].text);
    setSelectedIndex(nextIndex);
  };
  return (
    <ContainerContact id="contact">
      <ContainerBackgroundContact>
        <BgContact src="about-me/hexagon-bg-primary.svg" alt="Bg Contact" />
        <BgContactSecondary
          src={`contact/${selectedImage}`}
          alt={selectedText}
        />
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
