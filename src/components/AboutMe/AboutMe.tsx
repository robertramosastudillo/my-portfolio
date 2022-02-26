import React, { useEffect, useState } from "react";
import {
  BgAboutMeIcon,
  BgAboutMePrimary,
  BgAboutMeSecondary,
  ContainerAboutMe,
  ContainerBackgroundAboutMe,
  ContainerCualidadClose,
  ContainerCualidadStart,
  ContainerSecondaryHexan,
  ContainerSecondaryHexanText,
  Cualidad,
} from "./AboutMe.style";

export const AboutMe = () => {
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
    </ContainerAboutMe>
  );
};
