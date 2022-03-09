import styled from "styled-components";

export const ContainerContact = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px 0px 20px;
  border: 1px solid red;

  @media (min-width: 768px) {
    padding: 100px 48px 0px 48px;
  }

  @media (min-width: 1024px) {
    padding: 96px 92px 0px 92px;
  }

  @media (min-width: 1440px) {
    padding: 136px 92px 0px 92px;
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
