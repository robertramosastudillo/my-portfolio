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
  const images = ["tiro-al-blanco.svg", "cohete.svg", "solidario.svg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const texts = ["Acertado", "Objetivo", "Solidario"];
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [selectedText, setSelectedText] = useState(texts[0]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
      selectNewText(selectedTextIndex, texts);
    }, 4000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const selectNewText = (index: number, texts: string[], next = true) => {
    setLoaded(false);
    const condition = next
      ? selectedTextIndex < texts.length - 1
      : selectedTextIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedTextIndex + 1
        : 0
      : condition
      ? selectedTextIndex - 1
      : texts.length - 1;
    setSelectedText(texts[nextIndex]);
    setSelectedTextIndex(nextIndex);
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
        <BgAboutMeIcon
          src={selectedImage}
          alt="Icono"
          className={loaded ? "loaded" : " "}
          onLoad={() => setLoaded(true)}
        />
      </ContainerBackgroundAboutMe>
    </ContainerAboutMe>
  );
};
