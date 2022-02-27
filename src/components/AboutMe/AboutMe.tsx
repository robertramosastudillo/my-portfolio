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
    }
  ];

  const carouselContent = [
    { image: "tiro-al-blanco.svg", text: "Acertado" },
    { image: "cohete.svg", text: "Objetivo" },
    { image: "solidario.svg", text: "Solidario" },
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
          src="/hexagon-background-about-me.svg"
          alt="Sobre mi"
        />
        <ContainerSecondaryHexan>
          <ContainerSecondaryHexanText>
            <ContainerCualidadStart> {"<cualidad>"}</ContainerCualidadStart>
            <Cualidad>{selectedText}</Cualidad>
            <ContainerCualidadClose> {"</cualidad>"}</ContainerCualidadClose>
          </ContainerSecondaryHexanText>
          <BgAboutMeSecondary src="/hexagon-bg-secondary.svg" alt="Sobre mi" />
        </ContainerSecondaryHexan>
        <BgAboutMeIcon src={selectedImage} alt="Icono" />
      </ContainerBackgroundAboutMe>
      <ContainerInfoAboutMe>
        <SectionTitle>
          <span>01.</span>Sobre mí
        </SectionTitle>
        <AboutMeTextContainer>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s.
          </p>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
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
