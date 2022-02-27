import styled from "styled-components";

export const ContainerMyJob = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid purple;
  padding: 100px 20px 0px 20px;

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

export const ContainerInfoMyJob = styled.div`
  @media (min-width: 1280px) {
    max-width: 494px;
  }

  @media (min-width: 1440px) {
    max-width: 565px;
  }
`;

export const ContainerFeacturedProjects = styled.div``;
export const FeacturedProject = styled.div``;
