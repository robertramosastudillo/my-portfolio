import styled from "styled-components";

export const ContainerAboutMe = styled.section`
  /* border: 1px solid red; */
  padding: 100px 20px 0px 20px;
`;

export const ContainerBackgroundAboutMe = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  margin: 0 auto;
  position: relative;
  width: 343px;
  height: 343px;
`;

export const BgAboutMePrimary = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  /* animation: rotateHexan 4s ease-in-out alternate-reverse infinite; */

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
  width: 164px;
  height: 164px;
  position: absolute;
  bottom: -24px;
  left: 28px;
`;

export const ContainerSecondaryHexanText = styled.div`
  /* background-color: #ccc; */
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
  top: 15px;
  left: 0;
`;
export const ContainerCualidadClose = styled.p`
  font-size: 12px;
  position: absolute;
  bottom: 15px;
  left: 0;
`;
export const Cualidad = styled.p`
  /* background-color: orange; */
  position: absolute;
  left: 0;
  font-weight: 500;
  transition: 1s;
`;

export const BgAboutMeSecondary = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const BgAboutMeIcon = styled.img`
  width: 164px;
  height: 164px;
  position: absolute;
  bottom: 25%;
  left: 25%;
  right: 25%;
  top: 25%;
  animation: rotateIcon 4s ease-in-out alternate-reverse infinite;

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

  /* opacity: 0;
  transform: 1s;
  &.loaded {
    opacity: 1;
  } */
`;
