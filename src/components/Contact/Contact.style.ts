import styled from "styled-components";

export const ContainerContact = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 130px 20px 0px 20px;

  @media (min-width: 768px) {
    padding: 130px 48px 0px 48px;
  }

  @media (min-width: 1024px) {
    padding: 0px 92px 0px 92px;
  }

  @media (min-width: 1280px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 164px 92px 80px 92px;
  }

  @media (min-width: 1440px) { 
  padding: 200px 92px 150px 92px;
  }
`;

export const ContainerInfoContact = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #9168f7;
  margin: 0px 0px 20px 0px;
  @media (min-width: 1280px) {
    max-width: 494px;
  }

  @media (min-width: 1440px) {
    max-width: 565px;
  }
`;

export const ContactText = styled.p`
  margin: 0px 0px 16px 0px;
`;

export const ContactTextSend = styled.a`
  display: inline-block;
  color: #6838f2;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #9168f7;
    position: absolute;
    bottom: 2px;
    left: 0;
    transition: transform 0.3s ease;
    transform: scale(0);
  }

  &:hover {
    &:before {
      transition: transform 0.3s ease;
      transform: scale(1);
    }
  }
`;

export const ContactTextBold = styled.p`
  font-weight: 500;
`;

export const ContainerContactIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 0px 0px 40px 0px;
`;

export const BgItem = styled.a`
  width: 50px;
  height: 50px;
  background-color: #fcfaff;
  border-radius: 4px;
  box-shadow: -4px 4px 12px rgba(229, 215, 254, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e5d7fe;
  }

  @media (min-width: 1024px) {
    width: 48px;
    height: 48px;
  }
`;

export const ItemImage = styled.img`
  width: 24px;
  height: 24px;

  @media (min-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

export const ContainerContactCopyright = styled.div`
  margin: 0px 0px 20px 0;
`;

/////////New//////////
export const ContainerBackgroundContact = styled.div`
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
    width: 556px;
    height: 556px;
  }
`;
export const ContainerOfCoContact = styled.div``;

export const BgContact = styled.img`
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

export const BgContactSecondary = styled.img`
  position: absolute;
  width: 136px;
  height: 136px;
  top: 25%;
  bottom: 25%;
  animation: rotateIcon 4s ease-in-out alternate-reverse infinite;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    width: 228px;
    height: 228px;
  }

  @media (min-width: 1280px) {
    width: 260px;
    height: 260px;
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
