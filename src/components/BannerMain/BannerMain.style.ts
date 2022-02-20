import styled from "styled-components";

export const ContainerBannerMain = styled.section`
  border: 1px solid red;
  padding: 80px 20px 0px 20px;

  @media (min-width: 768px) {
    padding: 136px 48px 0px 48px;
  }

  @media (min-width: 1024px) {
    padding: 136px 92px 0px 92px;
  }
`;

export const ContainerBackgroundProfile = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  border: 1px solid red;
`;
export const BackgroundProfile = styled.img`
  width: 253px;
  height: 272px;
`;
