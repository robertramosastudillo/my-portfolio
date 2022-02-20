import React from "react";
import { BackgroundProfile, ContainerBackgroundProfile, ContainerBannerMain } from "./BannerMain.style";

export const BannerMain = () => {
  return (
    <ContainerBannerMain id="banner-main">
      <ContainerBackgroundProfile>
        <BackgroundProfile src="/background-profile.svg" alt="Perfil" />
      </ContainerBackgroundProfile>
    </ContainerBannerMain>
  );
};
