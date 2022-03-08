import styled from "styled-components";

export const ContainerBannerMain = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 20px 0px 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 136px 48px 0px 48px;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    padding: 96px 92px 0px 92px;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    padding: 136px 92px 0px 92px;
  }
`;

export const ContainerBackgroundProfile = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;
export const BackgroundProfile = styled.img`
  width: 253px;
  height: 272px;

  @media (min-width: 1024px) {
    width: 403px;
    height: 472px;
  }

  @media (min-width: 1280px) {
    width: 524px;
    height: 562px;
  }
`;

export const ContainerInfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  p {
    margin: 8px 0px;
  }

  @media (min-width: 768px) {
    text-align: left;
    justify-content: center;
  }
`;

export const TitleBanner = styled.h1`
  font-size: 24px;
  color: #6838f2;
  font-family: "Poppins", sans-serif;
  line-height: 30px;
  font-weight: 600;

  span {
    display: block;
    color: #caaffd;
    font-weight: 400;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  margin: 20px auto 0px auto;

  @media (min-width: 1024px) {
    margin: 20px 0px 0px 0px;
    width: 372px;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #9168f7;
  font-size: 14px;
  color: #fcfaff;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  height: 45px;
  width: 100%;
  border: 1px solid #9168f7;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6838f2;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #fcfaff;
  font-size: 14px;
  color: #9168f7;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  height: 45px;
  width: 100%;
  border: 1px solid #9168f7;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e5d7fe;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
