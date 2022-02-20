import styled from "styled-components";

export const ContainerBannerMain = styled.section`
  display: flex;
  flex-direction: column;
  padding: 80px 20px 0px 20px;
  /* border: 1px solid red; */
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
    font-weight: 400;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px auto 0px auto;
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
    background-color: #6838F2;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #FCFAFF;
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
    background-color: #E5D7FE;
  }
`;
