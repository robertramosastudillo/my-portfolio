import styled from "styled-components";

export const ContainerBannerMain = styled.section`
  display: flex;
  flex-direction: column;
  padding: 80px 20px 0px 20px;
  border: 1px solid red;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 136px 48px 0px 48px;
  }

  @media (min-width: 1024px) {
    padding: 136px 92px 0px 92px;
  }
`;

export const ContainerBackgroundProfile = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid blue;
`;
export const BackgroundProfile = styled.img`
  width: 253px;
  height: 272px;

  @media (min-width: 768px) {
    width: 524px;
    height: 562px;
  }
`;

export const ContainerInfoProfile = styled.div`
  text-align: center;
  border: 1px solid green;

  p {
    margin: 8px 0px;
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
  }
`;
