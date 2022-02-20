import React from "react";
import {
  BackgroundProfile,
  ContainerBackgroundProfile,
  ContainerBannerMain,
  ContainerInfoProfile,
  TitleBanner,
} from "./BannerMain.style";

export const BannerMain = () => {
  return (
    <ContainerBannerMain id="banner-main">
      <ContainerBackgroundProfile>
        <BackgroundProfile src="/background-profile.svg" alt="Perfil" />
      </ContainerBackgroundProfile>
      <ContainerInfoProfile>
        <p>Hola, mi nombre es</p>
        <TitleBanner>
          Robert Ramos <span>& im Frontend Developer</span>
        </TitleBanner>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </ContainerInfoProfile>
    </ContainerBannerMain>
  );
};
