import styled from "styled-components";

export const ContainerFeacturedProjects = styled.div`
  margin-bottom: 316px;
  position: relative;
  border: 1px solid purple;

  @media (min-width: 768px) {
    margin-bottom: 272px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 124px;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

export const ContainerInfoFeacturedProject: any = styled.div`
  position: absolute;
  top: 80%;
  background-color: #fcfaff;
  box-shadow: 0px 0px 10px rgba(229, 215, 254, 0.5);
  margin: 0px 20px;
  padding: 20px;
  border-radius: 4px;

  @media (min-width: 768px) {
    margin: 0px 48px;
  }

  @media (min-width: 1024px) {
    padding: 30px;
    width: 504px;
    margin: 0px 92px;
    right: 0;
    top: -12%;
  }

  @media (min-width: 1440px) {
    width: 648px;
  }
`;

export const FeacturedProject = styled.img`
  display: block;
  width: 100%;

  @media (min-width: 1024px) {
    width: 708px;
    margin-left: 92px;
  }

  @media (min-width: 1440px) {
    width: 780px;
  }
`;

export const ContainerMyJob = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  border: 1px solid purple;
  padding: 100px 0px 0px 0px;

  & ${ContainerFeacturedProjects}:nth-child(3) {
      @media (min-width: 1024px) {
        display: flex;
        justify-content: flex-end;
        margin-right: 92px;
      }
    }

  & ${ContainerFeacturedProjects}:nth-child(3) ${ContainerInfoFeacturedProject} {
    @media (min-width: 1024px) {
      left: 0;
    }
  }

  @media (min-width: 1440px) {
    padding: 136px 0px 0px 0px;
  }
`;

export const ContainerInfoMyJob = styled.div`
  margin-bottom: 36px;
  padding: 0px 20px;

  @media (min-width: 768px) {
    padding: 0px 48px;
  }

  @media (min-width: 1024px) {
    padding: 0px 92px;
    margin-bottom: 64px;
  }

  @media (min-width: 1280px) {
    max-width: 494px;
  }

  @media (min-width: 1440px) {
    max-width: 565px;
  }
`;

// INFO PROYECT
export const TextItem = styled.p`
  color: #6838f2;
  font-weight: 300;
  margin-bottom: 8px;

  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const TextPosition = styled.h4`
  font-weight: 500;
  font-size: 20px;
  color: #6838f2;
`;

export const AchievementContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0px 0px 0px;
`;
export const AchievementItem = styled.li`
  font-size: 14px;
  margin: 0px 20px;
  color: #6838f2;

  @media (min-width: 1024px) {
    margin: 0px 40px 0px 20px;
  }

  &:last-child {
    margin: 0;
  }
`;
export const ContainerButtons = styled.div`
  margin-top: 20px;
`;

export const SecondaryButton = styled.button`
  background-color: #fcfaff;
  font-size: 14px;
  color: #9168f7;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  height: 45px;
  width: 143px;
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
// INFO PROYECT
