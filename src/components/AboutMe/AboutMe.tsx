import React, { useEffect, useState } from "react";
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

export const AboutMe = () => {
  const stacks = [
    {
      icon: "html.svg",
      title: "HTML",
    },
    {
      icon: "css.svg",
      title: "CSS",
    },
    {
      icon: "js.svg",
      title: "Javascript",
    },
    {
      icon: "react.svg",
      title: "ReactJS",
    },
    {
      icon: "redux.svg",
      title: "Redux",
    },
    {
      icon: "nextjs.svg",
      title: "NextJS",
    },
    {
      icon: "sass.svg",
      title: "Sass",
    },
    {
      icon: "styled-components.svg",
      title: "Styled Components",
    },
    {
      icon: "ts.svg",
      title: "Typescript",
    },
    {
      icon: "nodejs.svg",
      title: "NodeJS",
    },
    {
      icon: "mongodb.svg",
      title: "MongoDB",
    },
    {
      icon: "expressjs.svg",
      title: "ExpressJS",
    },
  ];

  const carouselContent = [
    { image: "acertivo.svg", text: "Acertivo" },
    { image: "objetivo.svg", text: "Objetivo" },
    { image: "solidario.svg", text: "Solidario" },
    { image: "innovador.svg", text: "Innovador" },
    { image: "resiliente.svg", text: "Resiliente" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(carouselContent[0].image);
  const [selectedText, setSelectedText] = useState(carouselContent[0].text);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, carouselContent);
    }, 4000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index: number, carouselContent: any, next = true) => {
    const condition = next
      ? selectedIndex < carouselContent.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : carouselContent.length - 1;
    setSelectedImage(carouselContent[nextIndex].image);
    setSelectedText(carouselContent[nextIndex].text);
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
            desarrollo productos digitales centrados en el usuario
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
          {stacks.map(({ icon, title }, index) => (
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
