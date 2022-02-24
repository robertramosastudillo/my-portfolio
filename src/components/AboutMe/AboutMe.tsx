import React from "react";
import {
  BgAboutMeIcon,
  BgAboutMePrimary,
  BgAboutMeSecondary,
  ContainerAboutMe,
  ContainerBackgroundAboutMe,
} from "./AboutMe.style";

export const AboutMe = () => {
  return (
    <ContainerAboutMe id="about-me">
      <ContainerBackgroundAboutMe>
        <BgAboutMePrimary src="/hexagon-background-about-me.svg" alt="Sobre mi"/>
          <BgAboutMeSecondary src="/hexagon-bg-secondary.svg" alt="Sobre mi" />
          <BgAboutMeIcon src="/cohete.svg" alt="Objetivo" />
      </ContainerBackgroundAboutMe>
    </ContainerAboutMe>
  );
};
