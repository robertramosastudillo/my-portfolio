import React, { useEffect, useState } from "react";

import carousel from "../../mocks/carouselContent.json";
import tecnologies from "../../mocks/tecnologies.json";

import { SectionTitle } from "../../styles/CommonComponents";
import {
  AboutMeItem,
  AboutMeTecnologiesContainer,
  AboutMeTextContainer,
  BgAboutMeIcon,
  BgAboutMePrimary,
  BgAboutMeSecondary,
  BgItem,
  ContainerAboutMe,
  ContainerBackgroundAboutMe,
  ContainerCualidadClose,
  ContainerCualidadStart,
  ContainerInfoAboutMe,
  ContainerSecondaryHexan,
  ContainerSecondaryHexanText,
  Cualidad,
  ItemImage,
} from "./AboutMe.style";

interface CarouselProps {
  text: string;
  image: string;
}

export const AboutMe = () => {
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
    <ContainerAboutMe id="about-me">
      <ContainerBackgroundAboutMe>
        <BgAboutMePrimary
          src="about-me/hexagon-bg-primary.svg"
          alt="Sobre mi"
        />
        <ContainerSecondaryHexan>
          <ContainerSecondaryHexanText>
            <ContainerCualidadStart> {"<cualidad>"}</ContainerCualidadStart>
            <Cualidad>{selectedText}</Cualidad>
            <ContainerCualidadClose> {"</cualidad>"}</ContainerCualidadClose>
          </ContainerSecondaryHexanText>
          <BgAboutMeSecondary
            src="about-me/hexagon-bg-secondary.svg"
            alt="Sobre mi"
          />
        </ContainerSecondaryHexan>
        <BgAboutMeIcon src={`qualities/${selectedImage}`} alt="Icono" />
      </ContainerBackgroundAboutMe>
      <ContainerInfoAboutMe>
        <SectionTitle>
          <span>01.</span>Sobre mí
        </SectionTitle>
        <AboutMeTextContainer>
          <p>
            Me llamo <b>Robert Andres Ramos,</b> soy de <b>Cali, Colombia</b> y
            desarrollo productos digitales centrados en el usuario.
          </p>
          <p>
            Inicie en el mundo de la programacion en <b>2019.</b> Enfocado en el
            constante aprendizaje y emprendimiento.
          </p>
          <p>
            Soy una persona muy <b>autodidacta,</b> actualmente estoy
            aprendiendo sobre la Arquitectura de <b>Micro-Frontend.</b>
          </p>
        </AboutMeTextContainer>
        <AboutMeTecnologiesContainer>
          {tecnologies.map(({ icon, title }, index) => (
            <AboutMeItem key={index}>
              <BgItem>
                <ItemImage src={`tecnologies/${icon}`} alt={title} />
              </BgItem>
              <p>{title}</p>
            </AboutMeItem>
          ))}
        </AboutMeTecnologiesContainer>
      </ContainerInfoAboutMe>
    </ContainerAboutMe>
  );
};
