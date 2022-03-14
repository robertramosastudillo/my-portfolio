import React from "react";
import { SecondaryButton } from "../../styles/CommonComponents";
import {
  BackgroundProfile,
  PrimaryButton,
  ContainerBackgroundProfile,
  ContainerBannerMain,
  ContainerButtons,
  ContainerInfoProfile,
  TitleBanner,
} from "./BannerMain.style";

export const BannerMain = () => {
  const width = "100%";
  return (
    <ContainerBannerMain id="banner-main">
      <ContainerBackgroundProfile>
        <BackgroundProfile
          src="banner-main/profile.svg"
          alt="Perfil Robert Andres Ramos"
        />
      </ContainerBackgroundProfile>
      <ContainerInfoProfile>
        <p>Hola, Mi nombre es</p>
        <TitleBanner>
          Robert Ramos <span>& Soy Full Stack Developer</span>
        </TitleBanner>
        <p>
          <strong>Desarrollador Full Stack</strong> en tecnologias javascript.
          Especializado en el stack{" "}
          <b>MERN (MongoDB, ExpressJS, ReactJS Y NodeJS).</b>
        </p>
        <ContainerButtons>
          <PrimaryButton
            href="https://www.linkedin.com/in/robertramosastudillo"
            target="_blank"
          >
            Mi perfil en linkedIn
          </PrimaryButton>
          <SecondaryButton href="/cv-robert-ramos.pdf" download>
            Descargar mi CV
          </SecondaryButton>
        </ContainerButtons>
      </ContainerInfoProfile>
    </ContainerBannerMain>
  );
};
