import styled from "styled-components";

export const ContainerAboutMe = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px 0px 20px;

  @media (min-width: 768px) {
    padding: 100px 48px 0px 48px;
  }

  @media (min-width: 1024px) {
    padding: 96px 92px 0px 92px;
  }

  @media (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1440px) {
    padding: 136px 92px 0px 92px;
  }
`;

export const ContainerBackgroundAboutMe = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 264px;
  height: 264px;

   @media (min-width: 375px) {
    width: 280px;
    height: 280px;
  }  

  @media (min-width: 768px) {
    width: 408px;
    height: 408px;
  }

  @media (min-width: 1024px) {
    width: 456px;
    height: 456px;
  }

  @media (min-width: 1280px) {
    width: 588px;
    height: 588px;
  }
`;

export const BgAboutMePrimary = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: rotateHexan 4s ease-in-out alternate-reverse infinite;

  @keyframes rotateHexan {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(-25deg);
      transform: rotate(-25deg);
    }
  }
`;

export const ContainerSecondaryHexan = styled.div`
  width: 128px;
  height: 128px;
  position: absolute;
  bottom: -24px;
  left: 28px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    width: 228px;
    height: 228px;
  }

  @media (min-width: 1280px) {
    width: 280px;
    height: 280px;
  }
`;

export const ContainerSecondaryHexanText = styled.div`
  position: absolute;
  width: 60%;
  bottom: 25%;
  left: 20%;
  right: 25%;
  top: 19%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ContainerCualidadStart = styled.p`
  font-size: 12px;
  position: absolute;
  top: 12px;
  left: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    top: 24px;
  }

  @media (min-width: 1280px) {
    top: 36px;
  }
`;
export const ContainerCualidadClose = styled.p`
  font-size: 12px;
  position: absolute;
  bottom: 12px;
  left: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    bottom: 24px;
  }

  @media (min-width: 1280px) {
    bottom: 36px;
  }
`;

export const Cualidad = styled.p`
  position: absolute;
  left: 0;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const BgAboutMeSecondary = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const BgAboutMeIcon = styled.img`
  width: 132px;
  height: 132px;
  position: absolute;
  bottom: 25%;
  left: 25%;
  right: 25%;
  top: 25%;
  animation: rotateIcon 4s ease-in-out alternate-reverse infinite;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    width: 216px;
    height: 216px;
  }

  @media (min-width: 1280px) {
    width: 280px;
    height: 280px;
  }

  @keyframes rotateIcon {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(25deg);
      transform: rotate(25deg);
    }
  }
`;

export const ContainerInfoAboutMe = styled.div`
  margin: 20px auto;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    margin: 0px;
  }

  @media (min-width: 1280px) {
    flex-basis: 45%;
  }
`;
export const AboutMeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #9168f7;
`;

export const AboutMeTecnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 20px auto;
  gap: 10px;
  height: 292px;
`;

export const AboutMeItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const BgItem = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e5d7fe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 48px;
    height: 48px;
  }
`;

export const ItemImage = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 1024px) {
    width: 24px;
    height: 24px;
  }
`;
